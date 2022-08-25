import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import { StyledApp } from './App.styles';
import Header from './components/Header/Header';
import SingUpPage from './components/SingUpPage/SingUpPage';
import LogInPage from './components/LogInPage/LogInPage';
import UserPage from './components/UserPage/UserPage';
import PrivateRoute from './Private';

const App = () => {
  return (
    <StyledApp>
      <div className='styled__app--container'>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sing-up" element={<SingUpPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route
            path="/user-page"
            element={<PrivateRoute component={UserPage} />}
          />
          {/* <PrivateRoute path="/protected" element={<UserPage />} /> */}
          {/* <Route path="/Games" element={<Games />} /> */}
        </Routes>
      </div>
      <Footer></Footer>
    </StyledApp>
  );
};

export default App;
