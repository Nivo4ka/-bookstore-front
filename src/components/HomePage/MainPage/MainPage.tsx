import React from 'react';
import { StyledMain } from '../../../styles/HomePage.styles';
import Catalog from '../Catalog/Catalog';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Header from '../../Header/Header';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import SingUpBanner from '../SingUpBanner/SingUpBanner';

const MainPage = () => {
  return (
    <StyledMain>
      {/* <Header></Header> */}
      <HeaderBanner></HeaderBanner>
      <Catalog></Catalog>
      <SingUpBanner></SingUpBanner>

    </StyledMain>
  );
}

export default MainPage;
