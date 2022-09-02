import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import search from '../../images/icons/Search.svg';
import profile from '../../images/icons/User_profile2.svg';
import heart from '../../images/icons/Heart.svg';
import cart from '../../images/icons/Cart.svg';
import { StyledHeader } from './Header.styles';
import { useAppSelector } from '../../store/hooks';
import Button from '../Button/Button';
import ImgButton from '../ImgButton/ImgButton';

const Header = () => {
  const userInfo = useAppSelector((state) => state.user.user);
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

  const goToMainPage = () => {
    navigate('/');
  };

  const goToUserPage = () => {
    navigate('/user-page');
  };

  return (
    <StyledHeader>
      <img src={logo} alt="logo-img" onClick={goToMainPage} />
      <div className="styled__header-catalog_input_area">
        <p>Catalog</p>
        <div className="styled__header-input_area">
          <img className="" src={search} alt="seach" />
          <input className="styled__text__input styled__header--search__input" id="search" type="text" required />
          <label className="styled__label" htmlFor="search">Search</label>
        </div>
      </div>

      {
        userInfo?.email
          ? (<div className="styled-header_menu">
            <ImgButton
              src={profile}
              onClick={goToUserPage}
              className="styled__header-img-button"
            />
            <ImgButton
              src={heart}
              onClick={goToUserPage}
              className="styled__header-img-button"
            />
            <ImgButton
              src={cart}
              onClick={goToUserPage}
              className="styled__header-img-button"
            />
             </div>)
          : <Button onClick={goToLogIn}>Log In/ Sing Up</Button>
      }

    </StyledHeader>
  );
};

export default Header;
