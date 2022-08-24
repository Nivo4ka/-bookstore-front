import React from 'react';
import { StyledPrimaryButton } from '../../../styles/BasicThings.styles';
import castle from '../../../images/castle.svg';
import { StyledSingUpBanner } from '../../../styles/HomePage.styles';

const SingUpBanner = () => {
  return (
    <StyledSingUpBanner>
      <img src={castle} alt='castle'></img>
      <div className='styled__singup__banner--info__area'>
        <h2>Authorize now</h2>
        <p>Authorize now and discover the fabulous world of books</p>
        <StyledPrimaryButton>Log In/ Sing Up</StyledPrimaryButton>
      </div>

    </StyledSingUpBanner>
  );
}

export default SingUpBanner;
