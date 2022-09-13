import React from 'react';
import type { SortType } from '../../types/filterTypes';
import StyledSort from './Sorts.styles';

interface IProps {
  onChangeCheck: (index: number) => void;
  selectedSortBy: string;
  arrFilter: SortType[];
}

const SortPrice: React.FC<IProps> = (props) => {
  return (
    <StyledSort>
      <ul>
        {props.arrFilter.map((item, index) => (
          <li key={index}>
            <p
              className={item.currentValue === props.selectedSortBy ? 'styled-sort__p' : 'styled-sort__p styled-sort__p_disabled'}
              onClick={() => props.onChangeCheck(index)}
            >{item.title}
            </p>
          </li>
        ))}
      </ul>
    </StyledSort>
  );
};

export default SortPrice;
