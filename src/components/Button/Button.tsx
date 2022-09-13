import React from 'react';
import StyledButton from './Button.styles';

type PropsType = {
  onClick?: () => void;
  type?: 'submit' | 'button';
} & React.PropsWithChildren;

const Button: React.FC<PropsType> = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
