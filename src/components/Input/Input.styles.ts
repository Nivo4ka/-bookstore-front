import styled, { css } from 'styled-components';

export default styled.div<{ error?: string; name: string }>`
  .styled-input__container{
    position: relative;
    display: flex;
    align-items: center;
  }

  ${(p) => {
    if (p.name !== 'search') {
      return css`
      margin-bottom: 20px;
      `;
    }
  }
}
  
  .styled-input__svg{
    position: absolute;
    left: 26px;
    stroke: #B9BAC3;
    color: #B9BAC3;
  }
  .styled-input__label{
    position: absolute;
    left: 64px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    color: #B9BAC4;
    font-weight: 400;
    font-size: 16px;
    transition: 200ms ease all;
    cursor: inherit;
  }

  .styled-input__input{
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
    :valid ~ .styled-input__svg {
      stroke: #344966;
      color: #344966;
    }
    :valid ~ .styled-input__label {
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.75px;
      color: #344966;
      transform: translate(0, -12px);
    }
  }

  .styled-input__error-info{
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #344966;
    align-items: center;
    letter-spacing: 0.75px;
    margin: 9px 0 15px 0;
    ${(p) => {
    if (p.name === 'search') {
      return css`
      display: none;
      `;
    }
  }
}
  }

  ${(p) => {
    if (p.error) {
      return css`
        #${p.name}{
          outline: 2px solid #ED2E7E;
          background: #FFF2F7;
          :valid ~ .styled__label{
            color: #C30052;
          }
        }
        #${p.name}__error{
          color: #C30052;
        }
      `;
    }
  }
}
`;
