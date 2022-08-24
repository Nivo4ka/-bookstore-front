import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../images/logo.svg';
import search from '../../images/icons/Search.svg';
import { StyledHeader } from '../../styles/Header.styles';
import { StyledPrimaryButton, StyledSearchInput, StyledLabel } from '../../styles/BasicThings.styles';

const Header = () => {
  let navigate = useNavigate();

  const goToLogIn = () => navigate('/log-in');

  return (
    <StyledHeader>
      <img src={logo} alt='logo-img' />
      <div className='styled__header-catalog_input_area'>
        <p>Catalog</p>
        <div className='styled__header-input_area'>
          <img className='' src={search} alt='seach' />
          <StyledSearchInput id='search' type='text' required />
          <StyledLabel htmlFor='search'>Search</StyledLabel>
        </div>
      </div>
      <StyledPrimaryButton onClick={goToLogIn}>Log In/ Sing Up</StyledPrimaryButton>
    </StyledHeader>
  );
}

export default Header;
