import React, { useState } from 'react';
import { Container } from './styles';

export const Input = ({ ...rest }): React.ReactElement => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      {...rest}
    />
  );
};
