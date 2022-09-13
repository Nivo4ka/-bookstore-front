import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import BookCard from '../BookCard';
import StyledCatalog from './Catalog.styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import getAllBooks from '../../store/slices/book/thunks/getAllBooks';
import type { DirectionType, FilterRequestType } from '../../types/filterTypes';

const Catalog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const filter = useAppSelector((state) => state.filter);
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => ((async () => {
      try {
        const request: FilterRequestType = {
          sortBy: searchParams.get('sortBy') || 'price',
          direction: searchParams.get('direction') as DirectionType || 'asc',
          minPrice: searchParams.get('minPrice') || '1',
          maxPrice: searchParams.get('maxPrice') || '100',
          search: searchParams.get('search') || '',
          page: searchParams.get('page') || '1',
          pageSize: searchParams.get('pageSize') || '8',
          genres: searchParams.get('genres') || '',
        };

        await dispatch(getAllBooks(request)).unwrap();
        setSearchParams(request);
      } catch (err) {
        toast.error(err.message, {
          position: 'top-center',
        });
      } finally {
        setIsLoading(false);
      }
    })()),
    200);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, searchParams, setSearchParams]);

  useEffect(() => {
    // console.log(searchParams.getAll('sortBy'));
  }, [searchParams]);

  if (isLoading) {
    return (
      <StyledCatalog />
    );
  }
  return (
    <StyledCatalog>
      {/* <Filter /> */}
      <div className="styled-catalog__grid">
        {!!books.books.length && books.books.map((item, index) => (
          <BookCard key={index} book={item} />
        ))}
      </div>
      {/* <Pagination /> */}
    </StyledCatalog>
  );
};

export type SchemaFiledType = {
  [key: string]: string;
};

export type ParamType = Record<string, SchemaFiledType>;

export default Catalog;
