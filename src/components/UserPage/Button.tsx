import React from 'react';
import styled from 'styled-components';

interface IProps {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<IProps> = (props) => {
  return (<StyledWrapper
    onClick={props.onClick}
    className={props.className}
    isLoading={props.loading}
  >{props.children}
          </StyledWrapper>);
};

interface IStylesProps {
  isLoading?: boolean;
}

const StyledWrapper = styled.div<IStylesProps>`
  background-color: red;
  color: ${(p) => (p.isLoading ? 'grey' : 'black')};
`;

export default Button;
