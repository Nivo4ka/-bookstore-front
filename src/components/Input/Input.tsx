import React from 'react';
import { StyledInput } from './Input.styles';

interface IProps {
  // onClick?: () => void;
  onChange?: (e: React.ChangeEvent) => void;
  className?: string;
  value?: string;
  placeHolder?: string;
  nameInput: string;
  icon?: string;
  type?: string;
  error?: string;
}

const Input: React.FC<IProps> = (props) => {
  return (
    <StyledInput
      error={props.error || ''}
      name={props.nameInput}
    >
      <div className="styled__input--container">
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
