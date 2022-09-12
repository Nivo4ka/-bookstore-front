import React, { useState } from 'react';
import { ReactComponent as Forward } from '../../images/icons/Forward.svg';
import { StyledDropDownList } from './DropDownList.styles';

type PropsType = {
  onClick?: () => void;
  className?: string;
  name?: string;
} & React.PropsWithChildren;

const DropDownList: React.FC<PropsType> = (props) => {
  const [listIsActive, setListIsActive] = useState(false);
  const onchangeFilter = () => {
    setListIsActive(!listIsActive);
  };

  return (
    <StyledDropDownList
      isActive={listIsActive}
      name={props.name || ''}
    >
      <div
        className={`styled-drop-down-list__name ${props.className}`}
        onClick={onchangeFilter}
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
