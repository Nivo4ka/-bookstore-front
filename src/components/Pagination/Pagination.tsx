import React from 'react';
import star from '../../images/icons/Star.svg';
import star2 from '../../images/icons/Star2.svg';
import heart from '../../images/icons/Heart.svg';
import ImgButton from '../ImgButton/ImgButton';
import Button from '../Button/Button';
import type { IBook } from '../../types/bookTypes';
import { StyledPagination } from './Pagination.styles';

type PropsType={
  book: IBook;

}& React.PropsWithChildren;

const Pagination: React.FC<PropsType> = (props) => {
  return (
    <StyledPagination>
      <div>
        
      </div>
    </StyledPagination>
  );
};

export default Pagination;
