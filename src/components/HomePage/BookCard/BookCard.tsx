import React from 'react';
import Filter from '../Filter/Filter';
import star from '../../../images/icons/Star.svg';
import star2 from '../../../images/icons/Star2.svg';
import heart from '../../../images/icons/Heart.svg';
import bookimg from '../../../images/TheCryingbook.svg';
import { StyledPrimaryButton } from '../../../styles/BasicThings.styles';
import { StyledBookCard } from '../../../styles/HomePage.styles';

interface Book {
  title: string;
  autor: string;
  rating: string;
  img: string;
  price: number;
}
const books: Book = {
  title: 'The Crying book',
  autor: 'Heather Christle',
  rating: '' + 1.0,
  img: bookimg,
  price: 14.99,
}

const BookCard = () => {
  return (
    <StyledBookCard>
      <div className='styled__bookcard--favorite'>
        <img src={heart} alt='heart'></img>
      </div>
      <img className='styled__bookcard--bookimg' src={books.img} alt={books.title}></img>
      <p className='styled__bookcard--title'>{books.title}</p>
      <p className='styled__bookcard--autor'>{books.autor}</p>
      <div className='styled__bookcard--rating__area'>
        <ul>
          <li>
            <img src={star2} alt='star2'></img>
          </li>
          <li>
            <img src={star} alt='star'></img>
          </li>
          <li>
            <img src={star} alt='star'></img>
          </li>
          <li>
            <img src={star} alt='star'></img>
          </li>
          <li>
            <img src={star} alt='star'></img>
          </li>
        </ul>
        <p>{books.rating}.0</p>
      </div>
      <StyledPrimaryButton>$ {books.price} USD</StyledPrimaryButton>
    </StyledBookCard>
  );
}

export default BookCard;
