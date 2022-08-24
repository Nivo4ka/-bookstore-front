import styled, { createGlobalStyle, css } from "styled-components";
import books from '../images/unsplash_DgQf1dUKUTM.svg';
import fairy from '../images/fairy.svg';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
body {
  width: 100vw;
  background-color: #fff;
  font-size: 24px;
  div{
    box-sizing: border-box;
  }
}
`;

export const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  .styled__app--container{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    min-height: calc(100vh - 341px);
  }
`;

export const StyledMain = styled.div`
  width: 100%;
`;

export const StyledHeaderBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  border-radius: 16px;
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-color: #F0F4EF;
  margin-bottom: 130px;
  background-image:url(${books});
  background-size: auto;
  background-position: bottom left;
  
  div{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 108px;
  }
  img{
    position: absolute;
    right: 98px;
  }

  h2{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
    margin-block-start: 0;
    margin-block-end: 10px;
  }
  p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #344966;
    width: 217px;
    margin-block-start: 0;
    margin-block-end: 50px;
  }
`;

export const StyledSingUpBanner = styled(StyledHeaderBanner)`
  background-image:url(${fairy});
  background-position: bottom right;
  justify-content: flex-end;
  img{
    left: 108px;
  }
  p{
    width: 415px;
  }
  .styled__singup__banner--info__area{
    height: 100%;
    margin-right: 108px;
  }
`;

export const StyledBookCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .styled__bookcard--favorite{
    position: absolute;
    top: 20px;
    left: 20px;
    background: #344966;
    opacity: 0.5;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .styled__bookcard--bookimg{
    border-radius: 16px;
    object-fit: cover;
    height: 100%;

  }

  .styled__bookcard--title{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin: 30px 0 0 0;
  }
  .styled__bookcard--autor{
    color: #B9BAC4;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .styled__bookcard--rating__area{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    ul{
      margin-block-start: 0;
      margin-block-end: 0;
      padding: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    li{
      list-style-type: none;
      display: inline;
    }
    p{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #B9BAC4;
      margin: 0 7px 0 25px;
    }
  }
`;

export const StyledCatalog = styled.div`

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;

  .styled__catalog--grid{
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 15px)); 
    grid-column-gap: 20px;
    grid-row-gap: 60px;

  }
  :last-child{
    width: auto;
  }

  .styled_catalog--pagination{
    width: 100%;
    background-color: aqua;
    height: 30px;
  }
`;

export const StyledFilter = styled.div`
  width: 100%;
  background-color: aqua;
  height: 30px;
`;