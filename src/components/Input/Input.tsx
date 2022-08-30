import React from 'react';
import { StyledInput } from './Input.styles';

interface IProps {
  // onClick?: () => void;
  onChange?: (e: React.ChangeEvent) => void;
  className?: string;
  value?: string;
  placeHolder?: string;
  nameInput?: string;
  icon?: string;
  type?: string;
}

const Input: React.FC<IProps> = (props) => {
  return (
    <StyledInput>
      <img src={props.icon} alt={props.icon} />
      <input
        type={props.type}
        name={props.nameInput}
        className={`styled__text__input ${props.className}`}
        id={props.nameInput}
        onChange={props.onChange}
        value={props.value}
        required
      />
      <label className="styled__label" htmlFor={props.nameInput}>{props.placeHolder}</label>
    </StyledInput>
  );
};

export default Input;
