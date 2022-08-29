import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import { StyledApp } from './App.styles';
import Header from './components/Header/Header';
import SingUpPage from './components/SingUpPage/SingUpPage';
import LogInPage from './components/LogInPage/LogInPage';
import UserPage from './components/UserPage/UserPage';
import PrivateRoute from './Private';
import { useAppDispatch } from './store/hooks';
import loginByToken from './actions/loginByToken';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (token) {
        await dispatch(loginByToken());
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return null;
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
          {/* <PrivateRoute path="/protected" element={<UserPage />} /> */}
          {/* <Route path="/Games" element={<Games />} /> */}
        </Routes>
      </div>
      <Footer />
    </StyledApp>
  );
};

export default App;
