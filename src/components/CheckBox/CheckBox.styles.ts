import styled, { css } from 'styled-components';

export default styled.div<{ value: boolean }>`
  input {
    display: none;
  }

  label {
    height: 24px;
  }

  div {
    height: 24px;
    width: 24px;
    background-color: ${(p) => (p.value ? p.theme.mainTheme.color.darkBlue : p.theme.mainTheme.color.white)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms ease all;
    cursor: pointer;

    img {
      margin: 0;
      width: 15px;
      height: auto;
      ${(p) => {
    if (!p.value) {
      return css`
        display: none;
      `;
    }
  }}
  }
    ${(p) => {
    if (!p.value) {
      return css`
        border: 1px solid ${p.theme.mainTheme.color.darkBlue};
        :hover{
          background-color: ${p.theme.mainTheme.color.darkGrey};
        }
        `;
    }
  }}

    :active {
      outline: 8px solid ${(p) => (p.value ? p.theme.mainTheme.color.lightGrey : p.theme.mainTheme.color.white)};
    }
  }

`;
