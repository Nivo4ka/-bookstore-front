import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Filter from '../Filter/Filter';
import BookCard from '../BookCard/BookCard';
import { StyledCatalog } from './Catalog.styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import getAllBooks from '../../store/slices/book/thunks/getAllBooks';
import Pagination from '../Pagination/Pagination';

const Catalog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const filter = useAppSelector((state) => state.filter);
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => ((async () => {
      try {
        await dispatch(getAllBooks()).unwrap();
      } catch (err) {
        toast.error(err.message, {
          position: 'top-center',
        });
      } finally {
        setIsLoading(false);
      }
    })()),
    500);

    return () => {
      clearTimeout(timer);
    };
    // (async () => {
    //   try {
    //     await dispatch(getAllBooks()).unwrap();
    //   } catch (err) {
    //     toast.error(err.message, {
    //       position: 'top-center',
    //     });
    //   } finally {
    //     setIsLoading(false);
    //   }
    // })();
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
        {!!books.books.length && books.books.map((item, index) => (
          <BookCard key={index} book={item} />
        ))}
      </div>
      <Pagination />
    </StyledCatalog>
  );
};

export default Catalog;
