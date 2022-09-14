import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import StyledSort from './Sorts.styles';

const arrSort = [
  {
    title: 'Price',
    currentValue: 'price',
  },
  {
    title: 'Name',
    currentValue: 'title',
  },
  {
    title: 'Author name',
    currentValue: 'autor',
  },
  {
    title: 'Rating',
    currentValue: 'rating',
  },
  {
    title: 'Date of issue',
    currentValue: 'creationDate',
  }];

const SortPrice = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentSortBy, setCurrentSortBy] = useState('price');
  const [currentDirection, setCurrentDirection] = useState('asc');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setCurrentSortBy(searchParams.get('sortBy') || 'price');
    setCurrentDirection(searchParams.get('direction') || 'asc');
  }, [searchParams]);

  const onChangeCheck = (item: string) => {
    if (currentSortBy === item) {
      searchParams.set('direction', currentDirection === 'desc' ? 'asc' : 'desc');
    } else {
      searchParams.set('sortBy', item);
      searchParams.set('direction', 'asc');
    }
    if (searchParams.get('direction') === 'asc') {
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
