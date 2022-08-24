import React from 'react';
import { StyledHeaderBanner } from '../../../styles/HomePage.styles';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import womanWithBook from '../../../images/2009.i305 1.svg';
import { StyledPrimaryButton } from '../../../styles/BasicThings.styles';

const HeaderBanner = () => {
  return (
    <StyledHeaderBanner>
      <div>
        <h2>Build your library with us</h2>
        <p>Buy two books and get one for free</p>
        <StyledPrimaryButton>Choose a book</StyledPrimaryButton>
      </div>
      <img src={womanWithBook} alt='woman with book'></img>
    </StyledHeaderBanner>
  );
}

export default HeaderBanner;
