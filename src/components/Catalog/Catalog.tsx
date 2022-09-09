import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Filter from '../Filter/Filter';
import BookCard from '../BookCard/BookCard';
import { StyledCatalog } from './Catalog.styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { StyledApp } from '../../App.styles';
import getAllBooks from '../../store/slices/book/thunks/getAllBooks';

const Catalog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const filter = useAppSelector((state) => state.filter);
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getAllBooks()).unwrap();
      } catch (err) {
        toast.error(err.message, {
          position: 'top-center',
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dispatch, filter]);

  if (isLoading) {
    return (
      <StyledCatalog />
    );
  }
  return (
    <StyledCatalog>
      <Filter />
      <div className="styled-catalog__grid">
        {books.books.length && books.books.map((item, index) => (
          <BookCard key={index} book={item} />
        ))}
      </div>
      <div className="styled-catalog__pagination">Пагинация</div>
    </StyledCatalog>
  );
};

export default Catalog;
