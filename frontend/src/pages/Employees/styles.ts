import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 8%;

  @media (max-width: 794px) {
    margin-left: 3%;
  }

  button {
    border: none;
    background: none;
  }
`;

export const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 50px;

  width: 1350px;

  @media (max-width: 1349px) {
    width: 1050px;
  }

  @media (max-width: 1155px) {
    width: 750px;
  }

  @media (max-width: 794px) {
    width: 450px;
    align-items: center;
    justify-content: center;
  } ;
`;

export const Title = styled.h1`
  color: #7401df;
  font-size: 80px;
  margin-bottom: 40px;

  @media (max-width: 794px) {
    font-size: 50px;
    margin-left: 10px;
  } ;
`;

export const User = styled.div`
  margin-top: 20px;
  display: block;
  border-radius: 10px;
  max-width: 300px;
  width: 100%;
  height: 400px;
  background-color: #7401df;
  margin-right: 20px;

  @media (max-width: 1155px) {
    margin-left: -90px;
  }

  div {
    margin-top: 50px;
    text-align: center;
  }

  img {
    width: 125px;
    height: 125px;

    border-radius: 50px 50px 0 50px;
    border: 5px solid #f6f6f6;
  }

  h1 {
    margin-top: 20px;
    color: #f6f6f6;
  }

  p {
    color: #f6f6f6;
    font-weight: 700;
  }

  div {
    button {
      margin-right: 5px;

      svg {
        font-size: 46px;
      }

      &:hover {
        transition: all ease 0.2s;
        transform: scale(1.2);
      }
    }

    strong {
      margin-right: 15px;
      background: #f6f6f6;
      font-size: 20px;
    }

    p {
      font-size: 26px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

export const Back = styled.div`
  font-size: 25px;
  margin-top: 35px;
  align-items: left;
`;
