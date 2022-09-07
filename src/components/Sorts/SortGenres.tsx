import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import { StyledSort } from './Sorts.styles';

interface IFilter {
  name: string;
  isCheck: boolean;
}

interface IProps {
  onClick?: () => void;
  onChangeCheck: (index: number) => void;
  name?: string;
  arrFilter: IFilter[];
}

const SortGenres: React.FC<IProps> = (props) => {
  return (
    <StyledSort>
      <ul>
        {props.arrFilter.map((item, index) => (
          <li key={index}>
            <CheckBox
              value={item.isCheck}
              index={index}
              onChange={(index) => props.onChangeCheck(index)}
            />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </StyledSort>
  );
};

export default SortGenres;
