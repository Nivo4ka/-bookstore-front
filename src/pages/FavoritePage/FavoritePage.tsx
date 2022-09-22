import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Button from '../../components/Button';
import BookPlate from '../../components/BookPlate';
import bookThunks from '../../store/slices/book/thunks/index';
import StyledFavoritePage from './FavoritePage.styles';
import { ReactComponent as BooksPlaceholder } from '../../images/unsplash_DgQf1dUKUTM.svg';

const FavoritePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user);
  const books = useAppSelector((state) => state.books.books);

  useEffect(() => {
    try {
      dispatch(bookThunks.getBooksByArray(userInfo.favorites)).unwrap();
    } catch (err) {
      toast.error(err.message);
    }
  }, [dispatch, userInfo.favorites]);

  const goToCatalog = () => {
    navigate('/');
  };

  return (
    <StyledFavoritePage>
      {books.length
        ? books.map((item) => (
          <BookPlate key={item.id} book={item} />
        ))
        : (
          <div className="styled-favoritepage__no-books">
            <BooksPlaceholder />
            <div className="styled-favoritepage__no-books_text">
              <h2>Your favorites is empty</h2>
              <p>Add items to favorites. Go to the catalog.</p>
              <Button className="styled-favoritepage__no-books_button" onClick={goToCatalog}>Go to catalog</Button>
            </div>
          </div>
        )
      }
    </StyledFavoritePage>
  );
};

export default FavoritePage;
