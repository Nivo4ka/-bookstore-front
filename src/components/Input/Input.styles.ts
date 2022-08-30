import styled from 'styled-components';

export const StyledInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img{
    position: absolute;
    left: 26px;
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
      height: 42px;
      padding:22px 0 0 64px;
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

`;
