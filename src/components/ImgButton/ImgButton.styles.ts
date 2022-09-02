import styled, { css } from 'styled-components';

export const StyledImgButton = styled.div<{ isNotSelected: boolean }>`
  background: #344966;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(p) => {
    if (p.isNotSelected) {
      return css`
      opacity: 0.5;
      `;
    }
  }}
`;
