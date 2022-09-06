import React from 'react';
import { StyledCheckBox } from './CheckBox.styles';
import check from '../../images/icons/Check.svg';

interface IProps {
  onClick?: () => void;
  onChange: (index: number) => void;
  className?: string;
  icon?: string;
  name?: string;
  value: boolean;
  index: number;
}

const CheckBox: React.FC<IProps> = (props) => {
  return (
    <StyledCheckBox value={props.value}>
      <input id={`${props.index}`} type="checkbox" checked={props.value} onChange={() => props.onChange(props.index)} />
      <label htmlFor={`${props.index}`}>
        <div>
          <img src={check} alt="check" />
        </div>
      </label>
    </StyledCheckBox>
  );
};

export default CheckBox;
