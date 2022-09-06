import React from 'react';
import { StyledHeaderBanner } from './HeaderBanner.styles';
import womanWithBook from '../../images/2009.i305 1.svg';
import Button from '../Button/Button';

const HeaderBanner = () => {
  return (
    <StyledHeaderBanner>
      <div>
        <h2>Build your library with us</h2>
        <p>Buy two books and get one for free</p>
        <a href="#mainCatalog">
          <Button>Choose a book</Button>
        </a>
      </div>
      <img src={womanWithBook} alt="woman with book" />
    </StyledHeaderBanner>
  );
};

export default HeaderBanner;
