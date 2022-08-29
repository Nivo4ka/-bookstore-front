import React from 'react';
import { StyledMain } from './MainPage.styles';
import Catalog from '../Catalog/Catalog';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import SingUpBanner from '../SingUpBanner/SingUpBanner';

const MainPage = () => {
  return (
    <StyledMain>
      <HeaderBanner />
      <Catalog />
      <SingUpBanner />
    </StyledMain>
  );
};

export default MainPage;
