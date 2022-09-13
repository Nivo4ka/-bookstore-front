import React from 'react';
import StyledMain from './MainPage.styles';
import Catalog from '../Catalog';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import SingUpBanner from '../SingUpBanner/SingUpBanner';
import { useAppSelector } from '../../store/hooks';
import Filter from '../Filter/Filter';
import Pagination from '../Pagination/Pagination';

const MainPage = () => {
  const userInfo = useAppSelector((state) => state.user);
  return (
    <StyledMain>
      <HeaderBanner />
      <Filter />
      <Catalog />
      <Pagination />
      {!userInfo?.email && <SingUpBanner />}
    </StyledMain>
  );
};

export default MainPage;
