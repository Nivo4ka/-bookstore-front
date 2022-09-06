import React, { useState } from 'react';
import { StyledFilter } from './Filter.styles';
import forward from '../../images/icons/Forward.svg';
import forwardLast from '../../images/icons/ForwardLast.svg';
import DropDownList from '../DropDownList/DropDownList';

const Filter = () => {
  const [genreFilter, setGenreFilter] = useState([
    {
      id: 1,
      name: 'Fiction',
      isCheck: false,
    },
    {
      id: 2,
      name: 'Non—fiction',
      isCheck: false,
    },
    {
      id: 3,
      name: 'Light fiction',
      isCheck: false,
    },
    {
      id: 4,
      name: 'Science-fiction',
      isCheck: false,
    },
    {
      id: 5,
      name: 'Fantasy',
      isCheck: false,
    },
    {
      id: 6,
      name: 'Business & Finance',
      isCheck: false,
    },
    {
      id: 7,
      name: 'Politics',
      isCheck: false,
    },
  ]);
  const [sortByFilter, setSortByFilter] = useState([
    {
      id: 1,
      name: 'Price',
      isCheck: false,
    },
    {
      id: 2,
      name: 'Name',
      isCheck: false,
    },
    {
      id: 3,
      name: 'Author name',
      isCheck: false,
    },
    {
      id: 4,
      name: 'Rating',
      isCheck: false,
    },
    {
      id: 5,
      name: 'Date of issue',
      isCheck: false,
    },
  ]);
  const onchangeGenre = (index: number) => {
    genreFilter[index].isCheck = !genreFilter[index].isCheck;
    setGenreFilter([...genreFilter]);
  };

  const onchangeSortBy = (index: number) => {
    const sorted = sortByFilter.map((item) => {
      const qwe = item;
      qwe.isCheck = false;
      return qwe;
    });
    sorted[index].isCheck = !sorted[index].isCheck;
    setGenreFilter([...sorted]);
  };

  return (
    <StyledFilter>
      <h2 id="mainCatalog">Catalog</h2>
      <div className="styled-filter__filter-area">
        <DropDownList name="Genre" icon={forward} arrFilter={genreFilter} onChangeFilter={onchangeGenre} />
        <DropDownList name="Price" icon={forward} onChangeFilter={onchangeSortBy} />
        <DropDownList
          name="Sort by price"
          icon={forwardLast}
          className="styled-drop-down-list__name_last-child"
          arrFilter={sortByFilter}
          onChangeFilter={onchangeSortBy}
        />
      </div>
    </StyledFilter>
  );
};

export default Filter;
