import styled from 'styled-components';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  position: relative;

  background: #f6f6f6;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #7401df;
  color: #312e38;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #312e38;

    &::placeholder {
      color: #312e38;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #7401df;
    color: #fff;

    &::before {
      border-color: #7401df transparent;
    }
  }
`;
