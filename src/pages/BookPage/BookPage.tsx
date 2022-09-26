import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import StarRatingComponent from 'react-star-rating-component';
import { ReactComponent as Star } from '../../images/icons/Star.svg';
import { ReactComponent as Arrow } from '../../images/icons/Arrow.svg';
import StyledBookPage from './BookPage.styles';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import loading from '../../images/icons/Loading.svg';
import SingUpBanner from '../../components/SingUpBanner';
import { deleteInfoBook } from '../../store/slices/book/bookSlice';
import userThunks from '../../store/slices/user/thunks/index';
import bookThunks from '../../store/slices/book/thunks/index';
import BookCover from '../../components/BookCover';

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
        await dispatch(bookThunks.getBookById(bookId!)).unwrap();
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
    if (!userInfo.email) {
      navigate('/log-in');
    } else if (!isBookFavorite) {
      dispatch(userThunks.addToFavorite(book!.id));
    } else {
      dispatch(userThunks.deleteFavorite(book!.id));
    }
  };

  const isBookFavorite = userInfo
    .favorites.findIndex((item) => item.bookId === book?.id) !== -1;

  const isBookInCart = userInfo.cart.findIndex((item) => item.bookId === book?.id) === -1;

  const onChangeRating = async (nextValue: number) => {
    try {
      await dispatch(userThunks.addRating({ bookId: book!.id!, grade: nextValue })).unwrap();
      await dispatch(bookThunks.getBookById(bookId!)).unwrap();
      setIsLoading(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const onAddToCart = () => {
    if (!userInfo.email) {
      navigate('/log-in');
    } else if (!isBookInCart) {
      navigate('/cart-page');
    } else {
      dispatch(userThunks.addToCart(book!.id));
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
        <div>
          <BookCover
            book={book!}
            isBookFavorite={isBookFavorite}
            onClickFavorite={onClickFavorite}
            className="styled-bookpage__cover"
          />
        </div>
        <div className="styled-bookpage__info">
          <h2>{book?.title}</h2>
          <p>{book?.autor}</p>
          {userInfo.email
            ? (
              <div className="styled-bookpage__rating-area">
                <StarRatingComponent
                  name="rating"
                  starCount={1}
                  value={book!.rating}
                  renderStarIcon={() => <Star className="styled-bookpage__rating-area__star" />}
                  starColor="#BFCC94"
                  emptyStarColor="#0000"
                />
                <p>{(book!.rating || 0).toFixed(1)}</p>
                <div className="styled-bookpage__user-rating-area">
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
                </div>

              </div>
            )
            : (
              <div className="styled-bookpage__rating-area">
                <StarRatingComponent
                  name="rating"
                  starCount={5}
                  value={book!.rating}
                  renderStarIcon={() => <Star className="styled-bookpage__rating-area__star" />}
                  starColor="#BFCC94"
                  emptyStarColor="#0000"
                />
                <p>{(book!.rating || 0).toFixed(1)}</p>
              </div>
            )}
          <div className="styled-bookpage__description-area">
            <p className="styled-bookpage__description-title">Description</p>
            <p className="styled-bookpage__description">{book?.description}</p>
            <div className="styled-bookpage__button-area">
              <div className="styled-bookpage__button-area__button">
                <p className="styled-bookpage__description">Paperback</p>
                <Button onClick={onAddToCart} disabled>Not available</Button>
              </div>
              <div>
                <p className="styled-bookpage__description">Hardcover</p>
                <Button
                  onClick={onAddToCart}
                  secondary={!isBookInCart}
                >
                  {isBookInCart ? `$ ${(book?.price || 0).toFixed(2)} USD` : 'Added to cart'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="styled-bookpage__description-area-2">
        <p className="styled-bookpage__description-title">Description</p>
        <p className="styled-bookpage__description">{book?.description}</p>
        <div className="styled-bookpage__button-area">
          <div className="styled-bookpage__button-area__button">
            <p className="styled-bookpage__description">Paperback</p>
            <Button onClick={onAddToCart} disabled>Not available</Button>
          </div>
          <div>
            <p className="styled-bookpage__description">Hardcover</p>
            <Button
              onClick={onAddToCart}
              secondary={!isBookInCart}
            >
              {isBookInCart ? `$ ${(book?.price || 0).toFixed(2)} USD` : 'Added to cart'}
            </Button>
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
