import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoIosPersonAdd } from 'react-icons/io';

import { Container, Content, Title, Next } from './styles';
import Register from '../../Components/Register';

const Dashboard: React.FC = () => {
  const [modal, setModal] = useState(false);

  function statusModal() {
    setModal(true);
  }

  return (
    <>
      <Container>
        <Content>
          <div>
            <Title>Empresa X</Title>
            <p>Seja bem vindo à nosso sistema de usuarios !</p>
          </div>

          <Next>
            <Link to="/funcionarios">Veja nossos funcionarios cadastrados</Link>
            <button onClick={statusModal}>
              <IoIosPersonAdd size={30} />
            </button>
          </Next>
        </Content>

        {modal ? <Register /> : ''}
      </Container>
    </>
  );
};

export default Dashboard;
