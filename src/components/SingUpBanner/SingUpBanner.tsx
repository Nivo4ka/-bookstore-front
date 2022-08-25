import React from 'react';
import castle from '../../images/castle.svg';
import { StyledSingUpBanner } from './SingUpBanner.styles';

const SingUpBanner = () => {
  return (
    <StyledSingUpBanner>
      <img src={castle} alt='castle'></img>
      <div className='styled__singup__banner--info__area'>
        <h2>Authorize now</h2>
        <p>Authorize now and discover the fabulous world of books</p>
        <button className='styled__primary__button'>Log In/ Sing Up</button>
      </div>

    </StyledSingUpBanner>
  );
};

export default SingUpBanner;
