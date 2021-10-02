import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, type = 'button', ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
};
