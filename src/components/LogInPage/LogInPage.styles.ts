import styled, { css } from 'styled-components';

export const StyledLogInPage = styled.div<{ error1: string; error2: string }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  h2{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
    margin-block-start: 0;
    margin-block-end: 60px;
  }

  .styled__login__page--input__container{
    position: relative;
    display: flex;
    align-items: center;
    img{
      position: absolute;
      left: 26px;
    }

  }

  .styled__login__page--error__info{
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #344966;
    align-items: center;
    letter-spacing: 0.75px;
    margin: 9px 0 30px 0;
  }

  ${({ error1 }) => {
    if (error1) {
      return css`
        #email{
          outline: 2px solid #ED2E7E;
          background: #FFF2F7;
          :valid ~ .styled__label{
            color: #C30052;

          }

        }
        #email__error{
          color: #C30052;
        }
      `;
    }
  }}
  ${({ error2 }) => {
    if (error2) {
      return css`
        #password{
          outline: 2px solid #ED2E7E;
          background: #FFF2F7;
          :valid ~ .styled__label{
            color: #C30052;

          }

        }
        #password__error{
          color: #C30052;
        }
      `;
    }
  }}
`;
