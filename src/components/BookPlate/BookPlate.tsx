import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Button from '../Button/Button';
import { ReactComponent as DeleteIcon } from '../../images/icons/Delete.svg';
import type { BookType } from '../../types/bookTypes';
import StyledBookPlate from './BookPlate.styles';
import userThunks from '../../store/slices/user/thunks/index';
import BookCover from '../BookCover/BookCover';

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
    if (!isBookFavorite) {
      dispatch(userThunks.addToFavorite(props.book.id));
    } else {
      dispatch(userThunks.deleteFavorite(props.book.id));
    }
  };

  const onChangeCount = (count: number) => {
    dispatch(userThunks.changeCount({ bookId: props.book.id, count }));
  };

  const onDeletefromCart = () => {
    dispatch(userThunks.deleteFromCart(props.book.id));
  };

  const onAddToCart = () => {
    if (!isBookInCart) {
      navigate('/cart-page');
    } else {
      dispatch(userThunks.addToCart(props.book.id));
    }
  };

  const isBookFavorite = userInfo
    .favorites.findIndex((item) => item.bookId === props.book.id) !== -1;

  const isBookInCart = userInfo.cart.findIndex((item) => item.bookId === props.book.id) === -1;

  return (
    <StyledBookPlate>
      <BookCover
        book={props.book}
        isBookFavorite={isBookFavorite}
        onClickFavorite={onClickFavorite}
        className="styled-bookplate__cover"
      />
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
              secondary={!isBookInCart}
            >
              {isBookInCart ? `$ ${props.book.price.toFixed(2)} USD` : 'Added to cart'}
            </Button>
          )
        }
      </div>
    </StyledBookPlate>
  );
};

export default BookPlate;
