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
import Input from '../Input/Input';

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
      <div className="styled-header__input-area">
        <p>Catalog</p>
        <Input
            // onChange={formik.handleChange}
            // value={formik.values.email}
            placeHolder="Search"
            nameInput="search"
            icon1={search}
            type1="text"
            // error={formik.errors.email}
            className="styled-header__search-input"
          />
      </div>

      {
        userInfo?.email
          ? (<div className="styled-header__menu">
            <ImgButton
              src={profile}
              onClick={goToUserPage}
              className="styled-header__img-button"
            />
            <ImgButton
              src={heart}
              onClick={goToUserPage}
              className="styled-header__img-button"
            />
            <ImgButton
              src={cart}
              onClick={goToUserPage}
              className="styled-header__img-button"
            />
             </div>)
          : <Button onClick={goToLogIn}>Log In/ Sing Up</Button>
      }

    </StyledHeader>
  );
};

export default Header;
