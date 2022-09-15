import React from 'react';
import { useSearchParams } from 'react-router-dom';
import StyledFilter from './Filter.styles';
import DropDownList from '../DropDownList';
import SortGenres from '../Sorts/SortGenres';
import SortPrice from '../Sorts/SortBy';
import MultiRangeSlider from '../MultiRangeSlider';
import { useAppSelector } from '../../store/hooks';

const Filter = () => {
  const arrSort = useAppSelector((state) => state.filter.arrSort);
  const [searchParams, setSearchParams] = useSearchParams();
  const minPrice = +(searchParams.get('minPrice') || '1');
  const maxPrice = +(searchParams.get('maxPrice') || '100');

  const onChangePrice = (options: { min: number; max: number }) => {
    if (!(+(searchParams.get('minPrice') || '1') === options.min)) {
      if (options.min === 1) {
        searchParams.delete('minPrice');
      } else {
        searchParams.set('minPrice', `${options.min}`);
      }
      setSearchParams(searchParams);
    }

    if (!(+(searchParams.get('maxPrice') || '100') === options.max)) {
      if (options.max === 100) {
        searchParams.delete('maxPrice');
      } else {
        searchParams.set('maxPrice', `${options.max}`);
      }
      setSearchParams(searchParams);
    }
  };

  return (
    <StyledFilter>
      <h2 id="mainCatalog">Catalog</h2>
      <div className="styled-filter__filter-area">
        <DropDownList
          name="Genre"
        >
          <SortGenres />
        </DropDownList>
        <DropDownList
          name="Price"
        >
          <MultiRangeSlider
            min={1}
            max={100}
            onChange={onChangePrice}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </DropDownList>
        <DropDownList
          name={`Sort by ${arrSort.find((sort) => sort.currentValue === (searchParams.get('sortBy') || 'price'))?.title.toLowerCase()}`}
          className="styled-drop-down-list__name_last-child"
        >
          <SortPrice />
        </DropDownList>
      </div>
    </StyledFilter >
  );
};

export default Filter;
