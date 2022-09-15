import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import { ReactComponent as Star } from '../../images/icons/Star.svg';
import { ReactComponent as Heart } from '../../images/icons/Heart.svg';
import StyledBookCard from './BookCard.styles';
import ImgButton from '../ImgButton';
import Button from '../Button';
import type { BookType } from '../../types/bookTypes';
import { useAppSelector } from '../../store/hooks';

type PropsType = {
  book: BookType;

} & React.PropsWithChildren;

const BookCard: React.FC<PropsType> = (props) => {
  const navigate = useNavigate();
  const userInfo = useAppSelector((state) => state.user);
  const rating = 3;

  const onClickFavorite = () => {
    if (userInfo.email) {
      // do something
    } else {
      navigate('/log-in');
    }
  };

  return (
    <StyledBookCard>
      <div className="styled-bookcard__cover">
        <ImgButton
          isNotSelected
          className="styled-bookcard__favorite"
          onClick={onClickFavorite}
        >
          <Heart />
        </ImgButton>
        <Link className="styled-bookcard__bookimg" to={`/book/${props.book.id}`}>
          {props.book.cover && <img className="styled-bookcard__bookimg" src={props.book.cover} alt={props.book.title} />}
        </Link>
      </div>
      <p className="styled-bookcard__title">{props.book.title}</p>
      <p className="styled-bookcard__autor">{props.book.autor}</p>
      <div className="styled-bookcard__rating-area">
        <StarRatingComponent
          name={`rating${props.book.id}`}
          starCount={5}
          value={rating}
          renderStarIcon={() => <Star className="styled-bookcard__rating-area__star" />}
          starColor="#BFCC94"
          emptyStarColor="#0000"
        />
        <p>{rating.toFixed(1)}</p>
      </div>
      <Button>$ {props.book.price.toFixed(2)} USD</Button>
    </StyledBookCard>
  );
};

export default BookCard;
