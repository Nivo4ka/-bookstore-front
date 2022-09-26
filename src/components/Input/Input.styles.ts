import styled, { css } from 'styled-components';

export default styled.div<{ error?: string; name: string }>`
  width: 100%;
  max-width: 349px;
  .styled-input__container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  ${(p) => {
    if (p.name !== 'search') {
      return css`
      margin-bottom: 20px;
      `;
    }
  }}
  
  .styled-input__svg {
    position: absolute;
    left: 26px;
    stroke: ${(p) => p.theme.mainTheme.color.darkGrey};
    color: ${(p) => p.theme.mainTheme.color.darkGrey};
  }

  .styled-input__label {
    position: absolute;
    left: 64px;
    color: ${(p) => p.theme.mainTheme.color.darkGrey};
    font-weight: 400;
    font-size: 16px;
    transition: 200ms ease all;
    cursor: inherit;
  }

  .styled-input__input {
    background: ${(p) => p.theme.mainTheme.color.light};
    border-radius: ${(p) => p.theme.borderRadius};
    outline: none;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: ${(p) => p.theme.mainTheme.color.dark};
    width: 100%;
    height: 64px;
    padding:0 0 0 64px;

    :focus {
      outline: 2px solid ${(p) => p.theme.mainTheme.color.dark};
    }

    :valid {
      height: 42px;
      padding:22px 0 0 64px;
    }

    :valid ~ .styled-input__svg {
      stroke: ${(p) => p.theme.mainTheme.color.darkBlue};
      color: ${(p) => p.theme.mainTheme.color.darkBlue};
    }

    :valid ~ .styled-input__label {
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.75px;
      color: ${(p) => p.theme.mainTheme.color.darkBlue};
      transform: translate(0, -12px);
    }
  }

  .styled-input__error-info {
    font-weight: ${(p) => p.theme.font.weightP};
    font-size: 14px;
    line-height: 24px;
    color: ${(p) => p.theme.mainTheme.color.darkBlue};
    align-items: center;
    letter-spacing: 0.75px;
    margin: 9px 0 15px 0;
    ${(p) => {
    if (p.name === 'search') {
      return css`
        display: none;
        `;
    }
  }}
  }

  ${(p) => {
    if (p.error) {
      return css`
        #${p.name}{
          outline: 2px solid ${(p) => p.theme.mainTheme.color.error};
          background: ${(p) => p.theme.mainTheme.color.lightError};
          :valid ~ .styled-input__label{
            color: ${(p) => p.theme.mainTheme.color.error};
          }
        }
        #${p.name}__error{
          color: ${(p) => p.theme.mainTheme.color.error};
        }
      `;
    }
  }}
`;
