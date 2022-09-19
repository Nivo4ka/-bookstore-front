import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import StyledSort from './Sorts.styles';

const SortPrice = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const arrSort = useAppSelector((state) => state.filter.arrSort);
  const [currentSortBy, setCurrentSortBy] = useState('price');
  const [currentDirection, setCurrentDirection] = useState('asc');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setCurrentSortBy(searchParams.get('sortBy') || 'price');
    setCurrentDirection(searchParams.get('direction') || 'ASC');
  }, [searchParams]);

  const onChangeCheck = (item: string) => {
    if (currentSortBy === item) {
      searchParams.set('direction', currentDirection === 'DESC' ? 'ASC' : 'DESC');
    } else {
      searchParams.set('sortBy', item);
      searchParams.set('direction', 'ASC');
    }
    if (searchParams.get('direction') === 'ASC') {
      searchParams.delete('direction');
    }
    if (searchParams.get('sortBy') === 'price') {
      searchParams.delete('sortBy');
    }
    setSearchParams(searchParams);
  };

  return (
    <StyledSort>
      <ul>
        {arrSort.map((item, index) => (
          <li key={index}>
            <p
              className={item.currentValue === currentSortBy ? 'styled-sort__p' : 'styled-sort__p styled-sort__p_disabled'}
              onClick={() => onChangeCheck(item.currentValue)}
            >{item.title}
            </p>
          </li>
        ))}
      </ul>
    </StyledSort>
  );
};

export default SortPrice;
