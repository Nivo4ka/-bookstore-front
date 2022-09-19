import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import StarRatingComponent from 'react-star-rating-component';
import { ReactComponent as Star } from '../../images/icons/Star.svg';
import { ReactComponent as Heart } from '../../images/icons/Heart.svg';
import { ReactComponent as Arrow } from '../../images/icons/Arrow.svg';
import StyledBookPage from './BookPage.styles';
import ImgButton from '../ImgButton';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import getBookById from '../../store/slices/book/thunks/getBookById';
import loading from '../../images/icons/Loading.svg';
import SingUpBanner from '../SingUpBanner/SingUpBanner';
import addToFavorite from '../../store/slices/user/thunks/addToFavorite';
import deleteFavorite from '../../store/slices/user/thunks/deleteFavorite';
import { deleteInfoBook } from '../../store/slices/book/bookSlice';
import addRating from '../../store/slices/user/thunks/addRating';

const BookPage = () => {
  const dispatch = useAppDispatch();
  const { bookId } = useParams();
  const navigate = useNavigate();
  const userInfo = useAppSelector((state) => state.user);
  const book = useAppSelector((state) => state.books.book);
  const [isLoading, setIsLoading] = useState(true);
  const [userRating, setUserRating] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getBookById(bookId!)).unwrap();
        setIsLoading(false);
      } catch (err) {
        toast.error(err.message);
      }
    })();
    return () => {
      dispatch(deleteInfoBook());
    };
  }, [bookId, dispatch]);

  useEffect(() => {
    if (userInfo.email) {
      const rating = userInfo.ratings.find((item) => item.bookId === +bookId!);
      if (rating?.grade) {
        setUserRating(rating?.grade || 0);
      }
    }
  }, [bookId, userInfo.email, userInfo.ratings]);

  const onClickFavorite = () => {
    if (userInfo.email) {
      if (isBookFavorite()) {
        dispatch(deleteFavorite(book!.id));
      } else {
        dispatch(addToFavorite(book!.id!));
      }
    } else {
      navigate('/log-in');
    }
  };

  const isBookFavorite = () => {
    const qwe = userInfo.favorites.findIndex((item) => item.bookId === book?.id);
    return qwe !== -1;
  };

  const onChangeRating = async (nextValue: number, prevValue: number, name: string) => {
    try {
      await dispatch(addRating({ bookId: book!.id!, grade: nextValue })).unwrap();
      await dispatch(getBookById(bookId!)).unwrap();
      setIsLoading(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (isLoading) {
    return (
      <StyledBookPage>
        <div className="loading-container">
          <img className="loading" src={loading} alt="loading" />
        </div>
      </StyledBookPage>
    );
  }

  return (
    <StyledBookPage>
      <div className="styled-bookpage__book-content">
        <div className="styled-bookpage__cover">
          <ImgButton
            isNotSelected
            className={isBookFavorite() ? 'styled-bookpage__favorite' : 'styled-bookpage__not-favorite'}
            onClick={onClickFavorite}
          >
            <Heart className="styled-bookpage__cover__favorite__svg" />
          </ImgButton>
          {book?.cover && <img className="styled-bookpage__cover__bookimg" src={book?.cover} alt={book?.title} />}
        </div>
        <div className="styled-bookpage__info">
          <h2>{book?.title}</h2>
          <p className="styled-bookpage__description">{book?.autor}</p>
          {userInfo.email
            ? (<div className="styled-bookpage__rating-area">
              <StarRatingComponent
                name="rating"
                starCount={1}
                value={book!.rating}
                renderStarIcon={() => <Star className="styled-bookpage__rating-area__star" />}
                starColor="#BFCC94"
                emptyStarColor="#0000"
              />
              <p>{book!.rating.toFixed(1)}</p>
              <StarRatingComponent
                name="rating"
                starCount={5}
                value={userRating}
                renderStarIcon={() => <Star className="styled-bookpage__rating-area__star" />}
                starColor="#BFCC94"
                emptyStarColor="#0000"
                onStarClick={onChangeRating}
              />
              <div className="styled-bookpage__rating-area__to-rate">
                <Arrow />
                <p>Rate this book</p>
              </div>

               </div>)
            : (<div className="styled-bookpage__rating-area">
              <StarRatingComponent
                name="rating"
                starCount={5}
                value={book!.rating}
                renderStarIcon={() => <Star className="styled-bookpage__rating-area__star" />}
                starColor="#BFCC94"
                emptyStarColor="#0000"
              />
              <p>{book!.rating.toFixed(1)}</p>
               </div>)}
          <p className="styled-bookpage__description-title">Description</p>
          <p className="styled-bookpage__description">{book?.description}</p>
          <div className="styled-bookpage__button-area">
            <div className="styled-bookpage__button-area__button">
              <p className="styled-bookpage__description">Paperback</p>
              <Button disabled>Not available</Button>
            </div>
            <div>
              <p className="styled-bookpage__description">Hardcover</p>
              <Button>$ {book?.price.toFixed(2)} USD</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="styled-bookpage__comments-area">
        <h2>Comments</h2>
      </div>
      {!userInfo?.email && <SingUpBanner />}
    </StyledBookPage>
  );
};

export default BookPage;
