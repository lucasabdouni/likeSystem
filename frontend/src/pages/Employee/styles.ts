import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 64px;
`;

export const Former = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  form {
    width: 400px;

    img {
      margin-left: 96px;
      width: 200px;
      height: 200px;
      border-radius: 50px 50px 0 50px;
      border: 3px solid #7401df;
    }

    label {
      cursor: pointer;
      svg {
        padding: 5px;
        border-radius: 50%;
        background: #7401df;
        color: #f6f6f6;
        font-size: 46px;
        margin-top: -40px;
        margin-left: 263px;
        margin-bottom: 35px;

        &:hover {
          color: ${shade(0.2, '#4b088a')};
        }
      }
      input {
        display: none;
      }
    }
  }
`;

export const Next = styled.div`
  text-align: center;
  justify-content: center;

  display: flex;

  height: 40px;

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
    display: flex;
    margin-left: 5px;
    width: 120px;
    padding: 10px 0 10px 10px;

    svg {
      margin-top: -5px;
      margin-right: 8px;
    }

    p {
      margin-top: 5px;
    }
  }
`;
