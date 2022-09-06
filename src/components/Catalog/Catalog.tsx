import React from 'react';
import Filter from '../Filter/Filter';
import BookCard from '../BookCard/BookCard';
import { StyledCatalog } from './Catalog.styles';

const Catalog = () => {
  return (
    <StyledCatalog>
      <Filter />
      <div className="styled-catalog__grid">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      </div>
      <div className="styled-catalog__pagination">Пагинация</div>
    </StyledCatalog>
  );
};

export default Catalog;
