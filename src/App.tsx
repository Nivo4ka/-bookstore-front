import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import { StyledApp } from './App.styles';
import Header from './components/Header/Header';
import SingUpPage from './components/SingUpPage/SingUpPage';
import LogInPage from './components/LogInPage/LogInPage';
import UserPage from './components/UserPage/UserPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useAppDispatch } from './store/hooks';
import loginByToken from './store/slices/user/thunks/loginByToken';
import loading from './images/icons/Loading.svg';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (token) {
        await dispatch(loginByToken());
      }
      setIsLoading(false);
    })();
  }, [dispatch]);

  if (isLoading) {
    return (
      <StyledApp>
        <div className="loading__container">
          <img className="loading" src={loading} alt="loading" />
        </div>
      </StyledApp>
    );
  }
  return (
    <StyledApp>
      <div className="styled__app--container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sing-up" element={<SingUpPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route
            path="/user-page"
            element={
              (<PrivateRoute>
                <UserPage />
               </PrivateRoute>)
            }
          />
        </Routes>
      </div>
      <Footer />
    </StyledApp>
  );
};

export default App;
