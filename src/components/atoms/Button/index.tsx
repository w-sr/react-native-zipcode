import React, { PropsWithChildren } from 'react';
import { ButtonProps } from 'react-native';
import { StyledButton, StyledButtonText } from './styles';

const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonProps>): JSX.Element => (
  <StyledButton {...props} activeOpacity={0.7}>
    <StyledButtonText>{children}</StyledButtonText>
  </StyledButton>
);

export default Button;
