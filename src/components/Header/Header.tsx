import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import search from '../../images/icons/Search.svg';
import { StyledHeader } from './Header.styles';

const Header = () => {
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
    <StyledHeader>
      <img src={logo} alt='logo-img' />
      <div className='styled__header-catalog_input_area'>
        <p>Catalog</p>
        <div className='styled__header-input_area'>
          <img className='' src={search} alt='seach' />
          <input className='styled__text__input styled__header--search__input' id='search' type='text' required />
          <label className='styled__label' htmlFor='search'>Search</label>
        </div>
      </div>
      <button className='styled__primary__button' onClick={goToLogIn}>Log In/ Sing Up</button>
    </StyledHeader>
  );
};

export default Header;
