import React, { useEffect, useState } from 'react';

import { FcLike, FcDislike } from 'react-icons/fc';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container, Content, Title, User, Lista, Back } from './styles';

interface Func {
  id: string;
  name: string;
  occupation: string;
  department: string;
  email: string;
  telephone: string;
  avatar: string;
  like: number;
  dislike: number;
}

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<Func[]>();
  useEffect(() => {
    api.get(`/employees`).then((response) => {
      setEmployees(response.data);
    });
  }, [employees]);

  return (
    <Container>
      <Content>
        <Title>Funcionarios</Title>

        <Lista>
          {employees
            ? employees.map((employee) => (
                <User key={employee.id}>
                  <div>
                    <img
                      src={`http://localhost:3333/uploads/${employee.avatar}`}
                      alt={employee.name}
                    />

                    <h1>{employee.name}</h1>

                    <p>
                      {employee.department} | {employee.occupation}
                    </p>

                    <div>
                      <button
                        onClick={() => {
                          api.patch(`/employees/like/${employee.id}`);
                        }}
                      >
                        <FcLike />
                      </button>
                      <strong>+{employee.like}</strong>
                      <button
                        onClick={() => {
                          api.patch(`/employees/dislike/${employee.id}`);
                        }}
                      >
                        <FcDislike />
                      </button>
                      <strong>-{employee.dislike}</strong>
                    </div>
                  </div>
                </User>
              ))
            : ''}
        </Lista>

        <Back>
          <Link to="/">
            <RiArrowGoBackFill />
            Voltar
          </Link>
        </Back>
      </Content>
    </Container>
  );
};

export default Employees;
