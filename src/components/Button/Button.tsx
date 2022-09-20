import React from 'react';
import StyledButton from './Button.styles';

type PropsType = {
  onClick?: () => void;
  type?: 'submit' | 'button';
  disabled?: boolean;
  secondary?: boolean;
  className?: string;
} & React.PropsWithChildren;

const Button: React.FC<PropsType> = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      className={`${props.className}`}
      secondary={props.secondary}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
