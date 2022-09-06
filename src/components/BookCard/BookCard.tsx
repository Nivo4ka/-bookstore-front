import React from 'react';
import star from '../../images/icons/Star.svg';
import star2 from '../../images/icons/Star2.svg';
import heart from '../../images/icons/Heart.svg';
import bookimg from '../../images/TheCryingbook.svg';
import { StyledBookCard } from './BookCard.styles';
import ImgButton from '../ImgButton/ImgButton';
import Button from '../Button/Button';

interface IBook {
  title: string;
  autor: string;
  rating: string;
  img: string;
  price: number;
}
const books: IBook = {
  title: 'The Crying book',
  autor: 'Heather Christle',
  rating: `${1.0}`,
  img: bookimg,
  price: 14.99,
};

const BookCard = () => {
  return (
    <StyledBookCard>
      <ImgButton
        src={heart}
        isNotSelected
        className="styled-bookcard__favorite"
      />
      <img className="styled-bookcard__bookimg" src={books.img} alt={books.title} />
      <p className="styled-bookcard__title">{books.title}</p>
      <p className="styled-bookcard__autor">{books.autor}</p>
      <div className="styled-bookcard__rating-area">
        <ul>
          <li>
            <img src={star2} alt="star2" />
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
        <p>{books.rating}.0</p>
      </div>
      <Button>$ {books.price} USD</Button>
    </StyledBookCard>
  );
};

export default BookCard;
