import React from 'react';
import { StyledHeaderBanner } from './HeaderBanner.styles';
import womanWithBook from '../../images/2009.i305 1.svg';

const HeaderBanner = () => {
  return (
    <StyledHeaderBanner>
      <div>
        <h2>Build your library with us</h2>
        <p>Buy two books and get one for free</p>
        <button className='styled__primary__button'>Choose a book</button>
      </div>
      <img src={womanWithBook} alt='woman with book'></img>
    </StyledHeaderBanner>
  );
};

export default HeaderBanner;
