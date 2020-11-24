import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { IoIosPersonAdd } from 'react-icons/io';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../Components/Input';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import { Container, Content, Title, Next, Former } from './styles';
import { MdAddAPhoto } from 'react-icons/md';

interface Params {
  id: string;
}

interface Func {
  name: string;
  occupation: string;
  department: string;
  email: string;
  telephone: string;
  avatar: string;
}

interface SignUpFormData {
  name: string;
  occupation: string;
  department: string;
  email: string;
  telephone: string;
}

const Dashboard: React.FC = () => {
  const { params } = useRouteMatch<Params>();
  const history = useHistory();
  const [employee, setEmployee] = useState<Func>();

  useEffect(() => {
    api.get(`/employees/${params.id}`).then((response) => {
      setEmployee(response.data);
    });
  }, [params.id]);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().notRequired(),
          occupation: Yup.string().notRequired(),
          department: Yup.string().notRequired(),
          email: Yup.string().notRequired(),
          telephone: Yup.number().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.patch(`employees/${params.id}`, data);

        history.push('/funcionarios');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [history, params.id],
  );

  return (
    <>
      <Container>
        <Content>
          <div>
            <Title>Empresa X </Title>
            <p>Altere seus dados de cadastro !</p>
          </div>

          <Former>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <img
                src={`http://localhost:3333/uploads/${employee?.avatar}`}
                alt="usuario"
              />
              <label htmlFor="avatar">
                <MdAddAPhoto />

                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  onChange={() => {}}
                />
              </label>

              <Input
                name="name"
                placeholder={employee ? employee.name : 'Nome'}
              />
              <Input
                name="occupation"
                placeholder={employee ? employee.occupation : 'Ocupação'}
              />
              <Input
                name="department"
                placeholder={employee ? employee.department : 'Departamento'}
              />
              <Input
                name="email"
                placeholder={employee ? employee.email : 'E-mail'}
              />
              <Input
                name="telephone"
                placeholder={
                  employee?.telephone ? employee.telephone : 'Telefone'
                }
              />

              <Next>
                <Link to="/funcionarios">Funcionarios</Link>
                <button type="submit">
                  <IoIosPersonAdd size={30} />
                  <p>Atualizar</p>
                </button>
              </Next>
            </Form>
          </Former>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
