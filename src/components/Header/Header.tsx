import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Search } from '../../images/icons/Search.svg';
import { ReactComponent as Profile } from '../../images/icons/User_profile2.svg';
import { ReactComponent as Heart } from '../../images/icons/Heart.svg';
import { ReactComponent as Cart } from '../../images/icons/Cart.svg';
import StyledHeader from './Header.styles';
import { useAppSelector } from '../../store/hooks';
import Button from '../Button';
import ImgButton from '../ImgButton';
import Input from '../Input';
import useDebounce from '../../useDebounce';

const Header = () => {
  const userInfo = useAppSelector((state) => state.user);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const currentSearch = useDebounce(search);
  const navigate = useNavigate();
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (currentSearch !== '') {
      searchParams.set('search', currentSearch);
    } else {
      searchParams.delete('search');
    }
    if (location.pathname === '/') {
      setSearchParams(searchParams);
    }
  }, [currentSearch, location.pathname, searchParams, setSearchParams]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate('/');
    }
  };

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
          onChange={onChangeSearch}
          value={search}
          placeHolder="Search"
          nameInput="search"
          Icon1={Search}
          type1="text"
          className="styled-header__search-input"
          onKeyDown={onKeyDown}
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
              <div className="styled">
                <Heart />
                <div>
                  <p>{userInfo.favorites.length}</p>
                </div>
              </div>
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
