import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Search } from '../../images/icons/Search.svg';
import { ReactComponent as Profile } from '../../images/icons/User_profile2.svg';
import { ReactComponent as Heart } from '../../images/icons/Heart.svg';
import { ReactComponent as Cart } from '../../images/icons/Cart.svg';
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
      <Logo onClick={goToMainPage} />
      <div className="styled-header__input-area">
        <p>Catalog</p>
        <Input
          // onChange={formik.handleChange}
          // value={formik.values.email}
          placeHolder="Search"
          nameInput="search"
          Icon1={Search}
          type1="text"
          className="styled-header__search-input"
        />
      </div>

      {
        userInfo?.email
          ? (<div className="styled-header__menu">
            <ImgButton
              onClick={goToUserPage}
              className="styled-header__img-button"
            >
              <Cart />
            </ImgButton>
            <ImgButton
              onClick={goToUserPage}
              className="styled-header__img-button"
            >
              <Heart />
            </ImgButton>
            <ImgButton
              onClick={goToUserPage}
              className="styled-header__img-button"
            >
              <Profile />
            </ImgButton>
             </div>)
          : <Button onClick={goToLogIn}>Log In/ Sing Up</Button>
      }

    </StyledHeader>
  );
};

export default Header;
