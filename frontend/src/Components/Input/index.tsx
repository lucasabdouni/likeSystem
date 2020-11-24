import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

import { FiAlertCircle } from 'react-icons/fi';

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<Input> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />

      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} color="#7401df" />
        </Error>
      )}
    </Container>
  );
};

export default Input;
