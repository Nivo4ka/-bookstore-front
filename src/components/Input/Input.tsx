import type { PureComponent } from 'react';
import React, { useState } from 'react';
import { StyledInput } from './Input.styles';

interface IProps {
  // onClick?: () => void;
  onChange?: (e: React.ChangeEvent) => void;
  className?: string;
  value?: string;
  placeHolder?: string;
  nameInput: string;
  Icon1: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Icon2?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  type1: string;
  type2?: string;
  error?: string;
}

const Input: React.FC<IProps> = (props) => {
  const { Icon1, Icon2 } = props;
  const [togglePassword, setTogglePassword] = useState(true);
  const onClickImg = () => {
    if (/password/i.test(props.nameInput)) {
      setTogglePassword(!togglePassword);
    }
  };

  return (
    <StyledInput
      error={props.error || ''}
      name={props.nameInput}
    >
      <div className="styled-input__container">
        {togglePassword ? <Icon1 onClick={onClickImg} /> : Icon2 && <Icon2 onClick={onClickImg} />}
        <input
          type={togglePassword ? props.type1 : props.type2}
          name={props.nameInput}
          className={`styled-input__input ${props.className}`}
          id={props.nameInput}
          onChange={props.onChange}
          value={props.value}
          required
        />
        <label className="styled-input__label" htmlFor={props.nameInput}>{props.placeHolder}</label>
      </div>
      <div
        className="styled-input__error-info"
        id={`${props.nameInput}__error`}
      >
        {props.error}
      </div>

    </StyledInput>
  );
};

export default Input;
