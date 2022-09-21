import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import { ReactComponent as Star } from '../../images/icons/Star.svg';
import { ReactComponent as HalfStar } from '../../images/icons/HalfStar.svg';
import { ReactComponent as Heart } from '../../images/icons/Heart.svg';
import StyledBookCard from './BookCard.styles';
import ImgButton from '../ImgButton';
import Button from '../Button';
import type { BookType } from '../../types/bookTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import deleteFavorite from '../../store/slices/user/thunks/deleteFavorite';
import addToFavorite from '../../store/slices/user/thunks/addToFavorite';
import addToCart from '../../store/slices/user/thunks/addToCart';
import BookCover from '../BookCover/BookCover';

type PropsType = {
  book: BookType;

} & React.PropsWithChildren;

const BookCard: React.FC<PropsType> = (props) => {
  const navigate = useNavigate();
  const userInfo = useAppSelector((state) => state.user);
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

  const onAddToCart = () => {
    if (userInfo.email) {
      dispatch(addToCart(props.book.id));
    } else {
      navigate('/log-in');
    }
  };

  return (
    <StyledBookCard>
      <BookCover
        book={props.book}
        isBookFavorite={isBookFavorite}
        onClickFavorite={onClickFavorite}
      />
      <p className="styled-bookcard__title">{props.book.title}</p>
      <p className="styled-bookcard__autor">{props.book.autor}</p>
      <div className="styled-bookcard__rating-area">
        <StarRatingComponent
          name={`rating${props.book.id}`}
          starCount={5}
          value={props.book.rating}
          renderStarIcon={() => <Star className="styled-bookcard__rating-area__star" />}
          renderStarIconHalf={() => <HalfStar className="styled-bookcard__rating-area__star" />}
          starColor="#BFCC94"
          emptyStarColor="#0000"
        />
        <p>{props.book.rating.toFixed(1)}</p>
      </div>
      <Button
        onClick={onAddToCart}
        secondary={!isBookInCart}
      >
        $ {props.book.price.toFixed(2)} USD
      </Button>
    </StyledBookCard>
  );
};

export default BookCard;
