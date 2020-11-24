import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/workspace.svg';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  background: url(${background}) no-repeat 72% center;
  background-size: 30%;

  @media (max-width: 1344px) {
    background-size: 20%;
  }

  @media (max-width: 1221px) {
    background: none;
  }
`;

export const Content = styled.div`
  margin-left: 25%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 64px;
`;

export const Next = styled.div`
  margin-top: 80px;
  display: flex;
  height: 45px;

  a {
    font-size: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    background: #7401df;
    color: #fff;

    &:hover {
      background: ${shade(0.2, '#7401df')};
    }
  }

  button {
    margin-left: 5px;
    width: 50px;
    padding: 10px;
  }
`;
