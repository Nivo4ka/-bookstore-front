import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import castle from '../../images/castle.svg';
import Button from '../Button/Button';
import StyledSingUpBanner from './SingUpBanner.styles';

const SingUpBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToLogIn = () => {
    if (location.pathname === '/log-in') {
      navigate('/sing-up');
    } else if (location.pathname === '/sing-up') {
      navigate('/log-in');
    } else {
      navigate('/log-in');
    }
  };

  return (
    <StyledSingUpBanner>
      <div className="styled-singup-banner__back">
        <img src={castle} alt="castle" />
        <div className="styled-singup-banner__info-area">
          <h2>Authorize now</h2>
          <p>Authorize now and discover the fabulous world of books</p>
          <Button onClick={goToLogIn}>Log In/ Sing Up</Button>
        </div>
      </div>
    </StyledSingUpBanner>
  );
};

export default SingUpBanner;
