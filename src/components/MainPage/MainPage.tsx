import React from 'react';
import StyledMain from './MainPage.styles';
import Catalog from '../Catalog';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import SingUpBanner from '../SingUpBanner/SingUpBanner';
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
