import React from 'react';
import StyledImgButton from './ImgButton.styles';

type PropsType = {
  onClick?: () => void;
  isNotSelected?: boolean;
  className?: string;
} & React.PropsWithChildren;

const ImgButton: React.FC<PropsType> = (props) => {
  return (
    <StyledImgButton
      onClick={props.onClick}
      isNotSelected={props.isNotSelected || false}
      className={props.className}
    >
      {props.children}
    </StyledImgButton>
  );
};

export default ImgButton;
