import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  leftIcon?: React.ComponentType<IconBaseProps>;
  rightIcon?: React.ComponentType<IconBaseProps>;
}

export const Button = ({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  type = 'button',
  ...rest
}: Props) => {
  return (
    <Container type={type} {...rest}>
      {LeftIcon && <LeftIcon />}
      <span>{children}</span>
      {RightIcon && <RightIcon />}
    </Container>
  );
};
