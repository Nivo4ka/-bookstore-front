import React from 'react';
import { StyledFilter } from './Filter.styles';
import DropDownList from '../DropDownList/DropDownList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeGenres, changePrice, changeSortBy } from '../../store/slices/filter/filterSlice';
import SortGenres from '../Sorts/SortGenres';
import SortPrice from '../Sorts/SortPrice';
import type { IPrice } from '../../types/filterTypes';
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider';

const Filter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);

  const onChangeGenres = (index: number) => {
    dispatch(changeGenres(index));
  };

  const onChangeSortBy = (index: number) => {
    dispatch(changeSortBy(index));
  };

  const onChangePrice = (values: IPrice) => {
    dispatch(changePrice(values));
  };

  return (
    <StyledFilter>
      <h2 id="mainCatalog">Catalog</h2>
      <div className="styled-filter__filter-area">
        <DropDownList
          name="Genre"
        >
          <SortGenres
            onChangeCheck={onChangeGenres}
            arrFilter={filter.genres}
          />
        </DropDownList>
        <DropDownList
          name="Price"
        // onChangeFilter={onchangeSortBy}
        >
          <MultiRangeSlider
            min={0}
            max={1000}
            values={filter.price}
            onChange={onChangePrice}
          />
        </DropDownList>
        <DropDownList
          name={`Sort by ${filter.sortBy.selectedSort.toLowerCase()}`}
          className="styled-drop-down-list__name_last-child"
        >
          <SortPrice
            onChangeCheck={onChangeSortBy}
            arrFilter={filter.sortBy.arrSort}
            selectedSortBy={filter.sortBy.selectedSort}
          />
        </DropDownList>
      </div>
    </StyledFilter>
  );
};

export default Filter;
