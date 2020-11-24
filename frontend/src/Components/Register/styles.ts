import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin-top: 100px;
  margin-left: 58px;
  background: #f6f6f6;
  width: 800px;
  height: 900px;

  display: flex;
`;

export const Trace = styled.div`
  width: 3px;
  height: 700px;
  background: #7401df;

  @media (max-width: 1087px) {
    background: none;
  }
`;

export const Former = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  margin-left: 100px;

  @media (max-width: 1087px) {
    margin-left: -340px;
    margin-right: 60px;
    background: #f6f6f6;
    margin-top: 20px;
  }

  form {
    width: 350px;

    @media (max-width: 680px) {
      width: 310px;
    }

    img {
      margin-left: 72px;
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
        margin-top: -35px;
        margin-left: 245px;
        margin-bottom: 35px;

        &:hover {
          color: ${shade(0.2, '#4b088a')};
        }
      }
      input {
        display: none;
      }
    }

    button {
      border: none;
      margin-top: 25px;
      margin-left: 125px;
      font-size: 20px;
      border-radius: 10px;
      padding: 10px;
      text-align: center;
      background: #7401df;
      color: #fff;

      &:hover {
        background: ${shade(0.2, '#7401df')};
      }
    }
  }
`;
