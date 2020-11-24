import React, { ChangeEvent, useCallback, useRef, useState } from 'react';

import { Container, Trace, Former } from './styles';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { MdAddAPhoto } from 'react-icons/md';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../Input/index';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

interface SignUpFormData {
  name: string;
  occupation: string;
  department: string;
  email: string;
}

interface Func {
  id?: string;
}

const Register: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);
  const [images, setImages] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>();
  const [employee, setEmployee] = useState<Func>();

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImage = e.target.files[0];

      setImages(selectedImage);

      const selectedImagesPreview = URL.createObjectURL(selectedImage);

      setPreviewImage(selectedImagesPreview);
    }
  }, []);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          occupation: Yup.string().required('Função obrigatória'),
          department: Yup.string().required('Departamento obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const subData = new FormData();

        subData.append('name', data.name);
        subData.append('occupation', data.occupation);
        subData.append('department', data.department);
        subData.append('email', data.email);

        if (images) {
          subData.append('avatar', images);
        }

        await api.post('employees', subData).then((response) => {
          setEmployee(response.data);
        });

        if (employee?.id) {
          history.push(`/funcionario/${employee.id}`);
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [images, history, employee],
  );

  return (
    <Container>
      <Trace />
      <Former>
        <Form ref={formRef} onSubmit={handleSubmit}>
          {!previewImage ? (
            <img
              src="https://www.sinpapms.org.br/imagens/usuario/perfil-sem-foto.png"
              alt="usuario"
            />
          ) : (
            <img src={previewImage} alt="Funcionario" />
          )}
          <label htmlFor="avatar">
            <MdAddAPhoto />

            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleAvatarChange}
            />
          </label>

          <Input name="name" placeholder="Nome" />
          <Input name="occupation" placeholder="Função" />
          <Input name="department" placeholder="Departamento" />
          <Input name="email" placeholder="E-mail" />

          <button type="submit">Cadastrar</button>
        </Form>
      </Former>
    </Container>
  );
};

export default Register;
