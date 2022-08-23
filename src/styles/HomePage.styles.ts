import styled, { createGlobalStyle, css } from "styled-components";
import books from '../images/unsplash_DgQf1dUKUTM.svg';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
body {
  background-color: #fff;
  font-size: 24px;
  div{
    box-sizing: border-box;
  }
}
`;

export const StyledApp = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const StyledMain = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* background-color: aqua; */
  
  box-sizing: border-box;
  min-height: calc(100vh - 341px);
`;

export const StyledHeaderBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  border-radius: 16px;
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-color: #F0F4EF;

  background-image:url(${books});
  background-size: auto;
  background-position: bottom left;
  
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
  }
  img{
    position: relative;
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