import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import BookCard from '../BookCard';
import StyledCatalog from './Catalog.styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import getAllBooks from '../../store/slices/book/thunks/getAllBooks';
import type { DirectionType, FilterRequestType } from '../../types/filterTypes';
import Filter from '../Filter';
import Pagination from '../Pagination';
import getGenres from '../../store/slices/filter/thunks/getGenres';

const Catalog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getGenres()).unwrap();
      } catch (err) {
        toast.error(err.message, {
          position: 'top-center',
        });
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      try {
        const request: FilterRequestType = {
          sortBy: searchParams.get('sortBy') || undefined,
          direction: searchParams.get('direction') as DirectionType || undefined,
          minPrice: searchParams.get('minPrice') || undefined,
          maxPrice: searchParams.get('maxPrice') || undefined,
          search: searchParams.get('search') || undefined,
          page: searchParams.get('page') || undefined,
          pageSize: searchParams.get('pageSize') || undefined,
          genres: searchParams.get('genres') || undefined,
        };

        await dispatch(getAllBooks(request)).unwrap();
      } catch (err) {
        toast.error(err.message, {
          position: 'top-center',
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dispatch, searchParams, setSearchParams]);

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

export type SchemaFiledType = {
  [key: string]: string;
};

export type ParamType = Record<string, SchemaFiledType>;

export default Catalog;
