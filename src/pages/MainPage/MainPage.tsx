import React from 'react';
import StyledMain from './MainPage.styles';
import Catalog from '../../components/Catalog';
import HeaderBanner from '../../components/HeaderBanner';
import SingUpBanner from '../../components/SingUpBanner';
import { useAppSelector } from '../../store/hooks';

const MainPage = () => {
  const userInfo = useAppSelector((state) => state.user);
  return (
    <StyledMain>
      <HeaderBanner />
      <Catalog />
      {!userInfo?.email && <SingUpBanner />}
    </StyledMain>
  );
};

export default MainPage;
