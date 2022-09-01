import React, { useState } from 'react';
import { StyledInput } from './Input.styles';

interface IProps {
  // onClick?: () => void;
  onChange?: (e: React.ChangeEvent) => void;
  className?: string;
  value?: string;
  placeHolder?: string;
  nameInput: string;
  icon1?: string;
  icon2?: string;
  type1?: string;
  type2?: string;
  error?: string;
}

const Input: React.FC<IProps> = (props) => {
  const [togglePassword, setTogglePassword] = useState(true);
  const onClickImg = () => {
    if (props.nameInput.includes('assword')) {
      setTogglePassword(!togglePassword);
    }
  };

  return (
    <StyledInput
      error={props.error || ''}
      name={props.nameInput}
    >
      <div className="styled__input--container">
        <img
          src={togglePassword ? props.icon1 : props.icon2}
          alt={togglePassword ? props.icon1 : props.icon2}
          onClick={onClickImg}
        />
        <input
          type={togglePassword ? props.type1 : props.type2}
          name={props.nameInput}
          className={`styled__text__input ${props.className}`}
          id={props.nameInput}
          onChange={props.onChange}
          value={props.value}
          required
        />
        <label className="styled__label" htmlFor={props.nameInput}>{props.placeHolder}</label>
      </div>
      <div
        className="error__info"
        id={`${props.nameInput}__error`}
      >
        {props.error}
      </div>

    </StyledInput>
  );
};

export default Input;
