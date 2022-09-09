import styled from 'styled-components';

export const StyledInfoSection = styled.div`

  .styled-user-page__text-div{
    background: #F0F4EF;
    border-radius: 16px;
    width: 522px;
    height: 64px;
    padding:30px 0 0 64px;
    box-sizing: border-box;
    text-align: start;
    p{
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.75px;
      color: #0D1821;
      font-weight: 400;
    }
    input{
      box-sizing: border-box;
      background: #F0F4EF;
      outline: none;
      border: none;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.75px;
      color: #0D1821;
    }
  }

  .styled-user-page__personal-information{
    margin-bottom: 40px;
  }

  .styled-user-page__styled-text-input{
    width: 458px !important;
  }

  .styled-user-page__div-container{
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    display: flex;
    box-sizing: border-box;
    svg{
      position: absolute;
      left: 26px;
      stroke: #B9BAC3;
      color: #B9BAC3;
    }
    .div-container__label{
      position: absolute;
      left: 64px;
      /* top: 6px; */
      font-size: 14px;
      line-height: 24px;
      display: flex;
      /* align-items: center; */

      letter-spacing: 0.75px;
      color: #344966;
      transform: translate(0, -12px);
    }
  }

`;
