import React from 'react';
import star from '../../images/icons/Star.svg';
import { ReactComponent as Star2 } from '../../images/icons/Star2.svg';
import { ReactComponent as Heart } from '../../images/icons/Heart.svg';
import StyledBookCard from './BookCard.styles';
import ImgButton from '../ImgButton';
import Button from '../Button';
import type { BookType } from '../../types/bookTypes';

type PropsType = {
  book: BookType;

} & React.PropsWithChildren;

const BookCard: React.FC<PropsType> = (props) => {
  return (
    <StyledBookCard>
      <div className="styled-bookcard__cover">
        <ImgButton
          isNotSelected
          className="styled-bookcard__favorite"
        >
          <Heart />
        </ImgButton>
        {props.book.cover && <img className="styled-bookcard__bookimg" src={props.book.cover} alt={props.book.title} />}
      </div>
      <p className="styled-bookcard__title">{props.book.title}</p>
      <p className="styled-bookcard__autor">{props.book.autor}</p>
      <div className="styled-bookcard__rating-area">
        <ul>
          <li>
            <Star2 />
          </li>
          <li>
            <img src={star} alt="star" />
          </li>
          <li>
            <img src={star} alt="star" />
          </li>
          <li>
            <img src={star} alt="star" />
          </li>
          <li>
            <img src={star} alt="star" />
          </li>
        </ul>
        <p>1.0</p>
      </div>
      <Button>$ {props.book.price} USD</Button>
    </StyledBookCard>
  );
};

export default BookCard;
