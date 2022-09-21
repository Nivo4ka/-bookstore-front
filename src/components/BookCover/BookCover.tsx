import React from 'react';
import { Link } from 'react-router-dom';
import ImgButton from '../ImgButton/ImgButton';
import StyledBookCover from './BookCover.styles';
import { ReactComponent as HeartIcon } from '../../images/icons/Heart.svg';
import type { BookType } from '../../types/bookTypes';

type PropsType = {
  onClickFavorite: () => void;
  isBookFavorite: boolean;
  book: BookType;
  className?: string;
} & React.PropsWithChildren;

const BookCover: React.FC<PropsType> = (props) => {
  return (
    <StyledBookCover
      className={`${props.className}`}
    >
      <ImgButton
        isNotSelected
        className={props.isBookFavorite ? 'styled-bookcover__favorite' : 'styled-bookcover__not-favorite'}
        onClick={props.onClickFavorite}
      >
        <HeartIcon />
      </ImgButton>
      <Link className="styled-bookcover__bookimg" to={`/book/${props.book.id}`}>
        {props.book.cover && <img className="styled-bookcover__bookimg" src={props.book.cover} alt={props.book.title} />}
      </Link>
    </StyledBookCover>
  );
};

export default BookCover;
