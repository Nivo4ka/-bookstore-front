import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import MainPage from './components/HomePage/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import { StyledApp } from './styles/HomePage.styles';

const App = () => {
  return (
    <StyledApp>
      <MainPage></MainPage>
      <Footer></Footer>
    </StyledApp>
  );
}

export default App;
