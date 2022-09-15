import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import StarRatingComponent from 'react-star-rating-component';
import { ReactComponent as Star } from '../../images/icons/Star.svg';
import { ReactComponent as Heart } from '../../images/icons/Heart.svg';
import StyledBookPage from './BookPage.styles';
import ImgButton from '../ImgButton';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import getBookById from '../../store/slices/book/thunks/getBookById';
import loading from '../../images/icons/Loading.svg';
import SingUpBanner from '../SingUpBanner/SingUpBanner';

const BookPage = () => {
  const dispatch = useAppDispatch();
  const { bookId } = useParams();
  const navigate = useNavigate();
  const userInfo = useAppSelector((state) => state.user);
  const rating = 3;
  const book = useAppSelector((state) => state.books.book);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getBookById(bookId!)).unwrap();
        setIsLoading(false);
      } catch (err) {
        toast.error(err.message, {
          position: 'top-center',
        });
      }
    })();
  }, [bookId, dispatch]);

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
              className="styled-bookpage__cover__favorite"
            // onClick={onClickFavorite}
            >
              <Heart className="styled-bookpage__cover__favorite__svg" />
            </ImgButton>
            {book?.cover && <img className="styled-bookpage__cover__bookimg" src={book?.cover} alt={book?.title} />}
          </div>
          <div>
            <h2>{book?.title}</h2>
            <p className="styled-bookpage__description">{book?.autor}</p>
            <div className="styled-bookpage__rating-area">
              <StarRatingComponent
                name="rating"
                starCount={5}
                value={rating}
                renderStarIcon={() => <Star className="styled-bookpage__rating-area__star" />}
                starColor="#BFCC94"
                emptyStarColor="#0000"
              />
              <p>{rating.toFixed(1)}</p>
            </div>
            <p className="styled-bookpage__description-title">Description</p>
            <p className="styled-bookpage__description">{book?.description}</p>
            <div className="styled-bookpage__button-area">
              <div className="styled-bookpage__button-area__button">
                <p className="styled-bookpage__description">Paperback</p>
                <Button>$ {book?.price.toFixed(2)} USD</Button>
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
