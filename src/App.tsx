import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SingUpPage from './components/SingUpPage/SingUpPage';
import LogInPage from './components/LogInPage/LogInPage';
import UserPage from './components/UserPage/UserPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { StyledApp } from './App.styles';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch } from './store/hooks';
import loginByToken from './store/slices/user/thunks/loginByToken';

import loading from './images/icons/Loading.svg';

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
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          await dispatch(loginByToken()).unwrap();
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
      <ToastContainer />
    </StyledApp>
  );
};

export default App;
