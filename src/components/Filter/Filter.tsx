import React, { useState } from 'react';
import StyledFilter from './Filter.styles';
import DropDownList from '../DropDownList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeGenres, changePrice, changeSortBy } from '../../store/slices/filter/filterSlice';
import SortGenres from '../Sorts/SortGenres';
import SortPrice from '../Sorts/SortPrice';
import type { PriceType } from '../../types/filterTypes';
import MultiRangeSlider from '../MultiRangeSlider';

const Filter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);
  const [filterPoint, setFilterPoint] = useState<number>(-1);

  const onClickFilter = (value: number) => {
    if (filterPoint === value) {
      setFilterPoint(-1);
    } else {
      setFilterPoint(value);
    }
  };

  // const onChangeGenres = (index: number) => {
  //   genres[index].isCheck = !genres[index].isCheck;
  //   dispatch(changeGenres(index));
  // };

  const onChangeSortBy = (index: number) => {
    dispatch(changeSortBy(index));
  };

  const onChangePrice = (values: PriceType) => {
    dispatch(changePrice(values));
  };

  return (
    <StyledFilter>
      <h2 id="mainCatalog">Catalog</h2>
      <div className="styled-filter__filter-area">
        <DropDownList
          name="Genre"
          onClick={onClickFilter}
          currentValue={1}
          filterPoint={filterPoint}
        >
          <SortGenres
            // onChangeCheck={onChangeGenres}
            // arrFilter={genres}
          />
        </DropDownList>
        <DropDownList
          name="Price"
          onClick={onClickFilter}
          currentValue={2}
          filterPoint={filterPoint}
        >
          <MultiRangeSlider
            min={0}
            max={100}
            values={filter.price}
            onChange={onChangePrice}
          />
        </DropDownList>
        <DropDownList
          name={`Sort by ${filter.sortBy.selectedSort.toLowerCase()}`}
          className="styled-drop-down-list__name_last-child"
          onClick={onClickFilter}
          currentValue={3}
          filterPoint={filterPoint}
        >
          <SortPrice
            onChangeCheck={onChangeSortBy}
            arrFilter={filter.sortBy.arrSort}
            selectedSortBy={filter.sortBy.selectedSort}
          />
        </DropDownList>
      </div>
    </StyledFilter >
  );
};

export default Filter;
