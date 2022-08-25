import React from 'react';
import Filter from '../Filter/Filter';
import BookCard from '../BookCard/BookCard';
import { StyledCatalog } from './Catalog.styles';

const Catalog = () => {
  return (
    <StyledCatalog>
      <Filter></Filter>
      <div className='styled__catalog--grid'>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      </div>
      <div className='styled_catalog--pagination'>Пагинация</div>
    </StyledCatalog>
  );
};

export default Catalog;
