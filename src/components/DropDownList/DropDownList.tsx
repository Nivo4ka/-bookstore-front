import React from 'react';
import { ReactComponent as Forward } from '../../images/icons/Forward.svg';
import StyledDropDownList from './DropDownList.styles';

type PropsType = {
  onClick: (value: number) => void;
  className?: string;
  name?: string;
  currentValue: number;
  filterPoint: number;
} & React.PropsWithChildren;

const DropDownList: React.FC<PropsType> = (props) => {
  return (
    <StyledDropDownList
      isActive={props.filterPoint === props.currentValue}
      name={props.name || ''}
    >
      <div
        className={`styled-drop-down-list__name ${props.className}`}
        onClick={() => props.onClick(props.currentValue)}
      >
        <p>{props.name}</p>
        <Forward />
      </div>

      <div className="styled-drop-down-list__list">
        <div className="list__decoration" />
        {props.children}
      </div>

    </StyledDropDownList>
  );
};

export default DropDownList;
