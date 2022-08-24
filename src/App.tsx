import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import MainPage from './components/HomePage/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import { StyledApp } from './styles/HomePage.styles';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SingUpPage from './components/SingUpPage/SingUpPage';
import LogInPage from './components/LogInPage/LogInPage';

const App = () => {
  return (
    <StyledApp>
      <div className='styled__app--container'>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sing-up" element={<SingUpPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          {/* <Route path="/Games" element={<Games />} /> */}
        </Routes>
      </div>
      <Footer></Footer>
    </StyledApp>
  );
}

export default App;
