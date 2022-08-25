import React from 'react';
import { StyledMain } from './MainPage.styles';
import Catalog from '../Catalog/Catalog';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import SingUpBanner from '../SingUpBanner/SingUpBanner';

const MainPage = () => {
  return (
    <StyledMain>
      <HeaderBanner></HeaderBanner>
      <Catalog></Catalog>
      <SingUpBanner></SingUpBanner>
    </StyledMain>
  );
};

export default MainPage;
