import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Button from '../Button/Button';
import ImgButton from '../ImgButton/ImgButton';
import { ReactComponent as Heart } from '../../images/icons/Heart.svg';
import type { BookType } from '../../types/bookTypes';
import deleteFavorite from '../../store/slices/user/thunks/deleteFavorite';
import addToFavorite from '../../store/slices/user/thunks/addToFavorite';
import StyledBookPlate from './BookPlate.styles';

type PropsType = {
  book: BookType;
};

const BookPlate: React.FC<PropsType> = (props) => {
  const userInfo = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickFavorite = () => {
    if (userInfo.email) {
      if (isBookFavorite) {
        dispatch(deleteFavorite(props.book.id));
      } else {
        dispatch(addToFavorite(props.book.id));
      }
    } else {
      navigate('/log-in');
    }
  };

  const isBookFavorite = userInfo
    .favorites.findIndex((item) => item.bookId === props.book.id) !== -1;

  const isBookInCart = userInfo.cart.findIndex((item) => item.bookId === props.book.id) === -1;

  return (
    <StyledBookPlate>
      <div className="styled-bookplate__cover">
        <ImgButton
          isNotSelected
          className={isBookFavorite ? 'styled-bookplate__favorite' : 'styled-bookplate__not-favorite'}
          onClick={onClickFavorite}
        >
          <Heart />
        </ImgButton>
        <Link className="styled-bookplate__bookimg" to={`/book/${props.book.id}`}>
          {props.book.cover && <img className="styled-bookplate__bookimg" src={props.book.cover} alt={props.book.title} />}
        </Link>
      </div>
      <div className="styled-bookplate__info">
        <div className="styled-bookplate__info__text">
          <h2>{props.book.title}</h2>
          <p>{props.book.autor}</p>
          <p>{props.book.description}</p>
        </div>
        <Button className="styled-bookplate__info__button" disabled={!isBookInCart}>{isBookInCart ? `$ ${props.book.price.toFixed(2)} USD` : 'Already in the cart'}</Button>
      </div>
    </StyledBookPlate>
  );
};

export default BookPlate;
