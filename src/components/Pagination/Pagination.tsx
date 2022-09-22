import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as Forward } from '../../images/icons/Forward.svg';
import { ReactComponent as Back } from '../../images/icons/Back.svg';
import { ReactComponent as Ellipse } from '../../images/icons/Ellipse.svg';
import StyledPagination from './Pagination.styles';
import { useAppSelector } from '../../store/hooks';

const Pagination = () => {
  const countBooks = useAppSelector((state) => state.books.count);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(+(searchParams.get('page') || '1'));
  const [currentPageSize] = useState(+(searchParams.get('pageSize') || '8'));
  const countPages = Math.ceil(countBooks / currentPageSize);
  const [arr, setArr] = useState<number[]>([]);

  const onChangePage = useCallback((item: number) => {
    setCurrentPage(item);
    searchParams.set('page', `${item}`);
    if (item === 1) {
      searchParams.delete('page');
    }
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const onChangePageBack = () => {
    if (+currentPage > 1) {
      setCurrentPage(currentPage - 1);
      searchParams.set('page', `${currentPage - 1}`);
      if ((currentPage - 1) === 1) {
        searchParams.delete('page');
      }
      setSearchParams(searchParams);
    }
  };

  const onChangePageForward = () => {
    if (+currentPage < countPages) {
      setCurrentPage(currentPage + 1);
      searchParams.set('page', `${currentPage + 1}`);
      if ((currentPage + 1) === 1) {
        searchParams.delete('page');
      }
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    const arrqwe: number[] = [];
    for (let i = 0; i < countPages; i++) {
      arrqwe.push(i + 1);
    }
    if (arrqwe.length === 0) {
      arrqwe.push(1);
    }
    setArr([...arrqwe]);
    if (countBooks <= (currentPageSize * (currentPage - 1))) {
      onChangePage(1);
    }
  }, [countBooks, countPages, currentPage, currentPageSize, onChangePage]);

  return (
    <StyledPagination>
      <Back className="pagination__back" onClick={onChangePageBack} />
      <div className="pagination__container">
        {arr.map((item, index) => (
          <Ellipse
            key={index}
            className={item === currentPage ? 'pagination__point pagination__point_choice' : 'pagination__point'}
            onClick={() => onChangePage(item)}
          />
        ))}
      </div>
      <Forward className="pagination__forward" onClick={onChangePageForward} />
    </StyledPagination>
  );
};

export default Pagination;
