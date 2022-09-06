import styled, { css } from 'styled-components';

export const StyledCheckBox = styled.div<{ value: boolean }>`

  input{
    display: none;
  }
  label{
    background-color: aqua;
    height: 24px;
  }
  div{
    height: 24px;
    width: 24px;
    background-color: ${(p) => (p.value ? '#344966' : '#FFFFFF')};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms ease all;
    cursor: pointer;
    img{
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
        border: 1px solid #344966;
        :hover{
          background-color: #B9BAC3;
        }
        `;
    }
  }}

    :active{
      outline: 8px solid ${(p) => (p.value ? '#D6D8E7' : '#FFFFFF')};
    }
  }

`;
