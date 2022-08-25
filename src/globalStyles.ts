import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  /* width: 100vw; */
  background-color: #fff;
  font-size: 20px;
  font-family: 'Poppins';
  font-style: normal;
  div{
    box-sizing: border-box;
  }
  p{
    
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #344966;
    margin: 0;
  }
  h2{
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
    margin: 0;
  }
  ul{
      margin: 0;
      padding: 0;
    }
  li{
    list-style-type: none;
  }
  .styled__primary__button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    background: #344966;
    border-radius: 16px;
    color: #F0F4EF;
    border: none;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.75px;
    transition: all 0.05s ease;
    :hover{
      background: #0D1821;
      cursor: pointer;
    }
    :active{
      outline: 8px solid #d6d8e799;
    }
    :focus{
      outline: 8px solid #d6d8e799;
    }
  };

  .styled__secondary__button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    border-radius: 16px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.75px;
    background: none;
    border-radius: 16px;
    border: 1px solid #0D1821;
    color: #0D1821;
    transition: all 0.05s ease;
    :hover{
      outline: 3px solid #0D1821;
      background: none;
      cursor: pointer;
    }
    :active{
      outline: 8px solid #d6d8e799;
    }
    :focus{
      outline: 8px solid #d6d8e799;
    }
  }

  .styled__label{
    position: absolute;
    left: 64px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    color: #B9BAC4;
    font-weight: 400;
    font-size: 16px;
    transform-origin: left bottom;
    transform: scale(1) translate3d(0, 0, 0);
    transition: 200ms ease all;
    cursor: inherit;
  }

  .styled__text__input{
    background: #F0F4EF;
    border-radius: 16px;
    outline: none;
    border: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #0D1821;
    width: 349px;
    height: 64px;
    padding:0 0 0 64px;
    ::placeholder{
      
    }
    :focus{
      outline: 2px solid #0D1821;
    }
    :valid{
      height: 34px;
      padding:30px 0 0 64px;
    }
  
  /* :focus ~ .styled__label {
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.75px;
    color: #B9BAC4;
    
    transform: scale(0.8) translate3d(0, -14px, 0);
  } */
    :valid ~ .styled__label {
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.75px;
      color: #344966;
      transform: scale(0.8) translate3d(0, -20px, 0);
    }
  }
}
`;
