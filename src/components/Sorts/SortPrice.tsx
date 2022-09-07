import React from 'react';
import { StyledSort } from './Sorts.styles';

interface IProps {
  // onClick: React.MouseEventHandler<HTMLParagraphElement> (index: number) => void;
  onChangeCheck: (index: number) => void;
  selectedSortBy: string;
  arrFilter: string[];
}

const SortPrice: React.FC<IProps> = (props) => {
  return (
    <StyledSort>
      <ul>
        {props.arrFilter.map((item, index) => (
          <li key={index}>
            <p
              className={item === props.selectedSortBy ? 'styled-sort__p' : 'styled-sort__p styled-sort__p_disabled'}
              onClick={() => props.onChangeCheck(index)}
            >{item}
            </p>
          </li>
        ))}
      </ul>
    </StyledSort>
  );
};

export default SortPrice;
