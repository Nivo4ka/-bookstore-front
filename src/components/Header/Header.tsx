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
import useDebounce from '../../utils/useDebounce';

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

  const goToFavoritePage = () => {
    navigate('/favorite-page');
  };

  const goToCartPage = () => {
    navigate('/cart-page');
  };

  return (
    <StyledHeader>
      <div>
        <Logo className="styled-header__logo" onClick={goToMainPage} />
      </div>

      <div className="styled-header__input-area">
        <p>Catalog</p>
      </div>
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
      {
        userInfo?.email
          ? (
            <div className="styled-header__menu">
              <ImgButton
                onClick={goToCartPage}
                className="styled-header__img-button"
              >
                <div className="styled-header__favorite-area">
                  <Cart />
                  {!!userInfo.cart.length &&
                    (
                      <div className="styled-header__favorite-info">
                        <p>{userInfo.cart.length}</p>
                      </div>
                    )
                  }
                </div>
              </ImgButton>
              <ImgButton
                onClick={goToFavoritePage}
                className="styled-header__img-button"
              >
                <div className="styled-header__favorite-area">
                  <Heart />
                  {!!userInfo.favorites.length &&
                    (
                      <div className="styled-header__favorite-info">
                        <p>{userInfo.favorites.length}</p>
                      </div>
                    )
                  }
                </div>
              </ImgButton>
              <ImgButton
                onClick={goToUserPage}
                className="styled-header__img-button"
              >
                <Profile />
              </ImgButton>
            </div>
          )
          : <Button onClick={goToLogIn}>Log In/ Sing Up</Button>
      }

    </StyledHeader>
  );
};

export default Header;
