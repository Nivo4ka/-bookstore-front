import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import Header from './components/Header';
import SingUpPage from './pages/SingUpPage';
import LogInPage from './pages/LogInPage';
import UserPage from './pages/UserPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { StyledApp } from './App.styles';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch } from './store/hooks';
import userThunks from './store/slices/user/thunks/index';

import loading from './images/icons/Loading.svg';
import BookPage from './pages/BookPage';
import FavoritePage from './pages/FavoritePage';
import CartPage from './pages/CartPage';

const arrRoutes = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/sing-up',
    element:
      <PrivateRoute isNeedAuth={false}>
        <SingUpPage />
      </PrivateRoute>,
  },
  {
    path: '/log-in',
    element:
      <PrivateRoute isNeedAuth={false}>
        <LogInPage />
      </PrivateRoute>,
  },
  {
    path: '/user-page',
    element:
      <PrivateRoute isNeedAuth>
        <UserPage />
      </PrivateRoute>,
  },
  {
    path: '/book/:bookId',
    element: <BookPage />,
  },
  {
    path: '/favorite-page',
    element:
      <PrivateRoute isNeedAuth>
        <FavoritePage />
      </PrivateRoute>,
  },
  {
    path: '/cart-page',
    element:
      <PrivateRoute isNeedAuth>
        <CartPage />
      </PrivateRoute>,
  },
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          await dispatch(userThunks.loginByToken()).unwrap();
        } catch (err) {
          toast.error(err.message, {
            position: 'top-center',
          });
        }
      }
      setIsLoading(false);
    })();
  }, [dispatch]);

  if (isLoading) {
    return (
      <StyledApp>
        <div className="loading-container">
          <img className="loading" src={loading} alt="loading" />
        </div>
      </StyledApp>
    );
  }
  return (
    <StyledApp>
      <div className="styled-app__container">
        <Header />
        <Routes>
          {arrRoutes.length && arrRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Routes>
      </div>
      <Footer />
      <ToastContainer position="top-center" />
    </StyledApp>
  );
};

export default App;
