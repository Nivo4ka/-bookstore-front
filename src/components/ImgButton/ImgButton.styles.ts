import styled, { css } from 'styled-components';

export default styled.div<{ isNotSelected: boolean }>`
  background: ${(p) => p.theme.mainTheme.color.darkBlue};
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
      opacity: 0.8;
      `;
    }
  }}
`;
