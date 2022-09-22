import React, { useRef, useState } from 'react';
import { ReactComponent as Forward } from '../../images/icons/Forward.svg';
import useComponentVisible from '../../utils/useComponentVisible';
import StyledDropDownList from './DropDownList.styles';

type PropsType = {
  className?: string;
  name?: string;
} & React.PropsWithChildren;

const DropDownList: React.FC<PropsType> = (props) => {
  const [isfilterOpen, setIsFilterOpen] = useState(false);
  const wrapperRef = useRef(null);
  const onClose = () => {
    setIsFilterOpen(false);
  };

  const onOpen = () => {
    setIsFilterOpen(!isfilterOpen);
  };

  useComponentVisible(wrapperRef, onClose);

  return (
    <StyledDropDownList
      isActive={isfilterOpen}
      name={props.name || ''}
      ref={wrapperRef}
    >
      <div
        className={`styled-drop-down-list__name ${props.className}`}
        onClick={onOpen}
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
