import React from 'react';
import { ReactComponent as Forward } from '../../images/icons/Forward.svg';
import { ReactComponent as Back } from '../../images/icons/Back.svg';
import { ReactComponent as Ellipse } from '../../images/icons/Ellipse.svg';
import type { IBook } from '../../types/bookTypes';
import { StyledPagination } from './Pagination.styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changePage, changePageForward, changePageBack } from '../../store/slices/filter/filterSlice';

type PropsType = {
  book?: IBook;

} & React.PropsWithChildren;

const Pagination: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const countBooks = useAppSelector((state) => state.books.count);
  const filter = useAppSelector((state) => state.filter);
  const countPages = Math.ceil(countBooks / +filter.pageSize);
  const arr: string[] = [];
  for (let i = 0; i < countPages; i++) {
    arr.push(`${i + 1}`);
  }

  const onChangePage = (item: string) => {
    dispatch(changePage(item));
  };

  const onChangePageBack = () => {
    dispatch(changePageBack());
  };

  const onChangePageForward = () => {
    if (+filter.page < countPages) {
      dispatch(changePageForward());
    }
  };

  return (
    <StyledPagination>
      <Back className="pagination__back" onClick={onChangePageBack} />
      <div className="pagination__container">
        {arr.map((item, index) => (
          <Ellipse
            key={index}
            className={item === filter.page ? 'pagination__point pagination__point_choice' : 'pagination__point'}
            onClick={() => onChangePage(item)}
          />
        ))}
      </div>
      <Forward className="pagination__forward" onClick={onChangePageForward} />
    </StyledPagination>
  );
};

export default Pagination;
