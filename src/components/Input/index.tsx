import React, { useState } from 'react';
import { Container } from './styles';

export const Input = ({ ...rest }): React.ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => setIsFocused(true);

  const handleInputBlur = () => setIsFocused(false);

  return (
    <Container
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      isFocused={isFocused}
      {...rest}
    />
  );
};
