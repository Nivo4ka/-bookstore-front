import React from 'react';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import logo from '../../images/logo.svg';
import search from '../../images/icons/Search.svg';
import { StyledHeader } from '../../styles/Header.styles';
import { StyledPrimaryButton, StyledSearchInput, StyledSearchLabel } from '../../styles/BasicThings.styles';

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt='logo-img'></img>
      <div className='styled__header-catalog_input_area'>
        <p>Catalog</p>

          <div className='styled__header-input_area'>
            <img className='' src={search} alt='seach'></img>
            <StyledSearchInput id='search' type='text' required></StyledSearchInput>
            <StyledSearchLabel htmlFor='search'>Search</StyledSearchLabel>
          </div>

      </div>
      <StyledPrimaryButton>Log In/ Sing Up</StyledPrimaryButton>

    </StyledHeader>
  );
}

export default Header;
