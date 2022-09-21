import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Button from '../Button/Button';
import ImgButton from '../ImgButton/ImgButton';
import { ReactComponent as Heart } from '../../images/icons/Heart.svg';
import { ReactComponent as DeleteIcon } from '../../images/icons/Delete.svg';
import type { BookType } from '../../types/bookTypes';
import deleteFavorite from '../../store/slices/user/thunks/deleteFavorite';
import addToFavorite from '../../store/slices/user/thunks/addToFavorite';
import StyledBookPlate from './BookPlate.styles';
import changeCount from '../../store/slices/user/thunks/changeCount';
import deleteFromCart from '../../store/slices/user/thunks/deleteFromCart';
import addToCart from '../../store/slices/user/thunks/addToCart';

type PropsType = {
  book: BookType;
  isCartPage?: boolean;
  count?: number;
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

  const onChangeCount = (count: number) => {
    if (userInfo.email) {
      dispatch(changeCount({ bookId: props.book.id, count }));
    } else {
      navigate('/log-in');
    }
  };

  const onDeletefromCart = () => {
    if (userInfo.email) {
      dispatch(deleteFromCart(props.book.id));
    } else {
      navigate('/log-in');
    }
  };

  const onAddToCart = () => {
    if (userInfo.email) {
      dispatch(addToCart(props.book.id));
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
          {!props.isCartPage &&
            <p className="styled-bookplate__description">{props.book.description}</p>
          }
        </div>
        {props.isCartPage &&
          (
            <div className="styled-bookplate__count-area">
              <div onClick={() => onChangeCount(-1)}>
                <p>-</p>
              </div>
              <p>{props.count}</p>
              <div onClick={() => onChangeCount(1)}>
                <p>+</p>
              </div>
              <DeleteIcon onClick={onDeletefromCart} />
            </div>
          )
        }
        {props.isCartPage
          ? <h2 className="styled-bookplate__price">{`$ ${props.book.price.toFixed(2)} USD`}</h2>
          : (
            <Button
              className="styled-bookplate__info__button"
              onClick={onAddToCart}
              disabled={!isBookInCart}
            >
              {isBookInCart ? `$ ${props.book.price.toFixed(2)} USD` : 'Already in the cart'}
            </Button>
          )
        }
      </div>
    </StyledBookPlate>
  );
};

export default BookPlate;
