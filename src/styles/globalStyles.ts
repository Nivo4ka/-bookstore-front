import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  background-color: ${(p) => p.theme.mainTheme.color.white};
  font-size: ${(p) => p.theme.font.sizeP};
  font-family: ${(p) => p.theme.font.family};
  font-style: normal;
  div {
    box-sizing: border-box;
  }
  p {
    font-weight: ${(p) => p.theme.font.weightP};
    font-size: ${(p) => p.theme.font.sizeP};
    line-height: ${(p) => p.theme.font.lineHeightP};
    color: ${(p) => p.theme.mainTheme.color.darkBlue};
    margin: ${(p) => p.theme.font.margin};
  }
  h2 {
    font-weight: ${(p) => p.theme.font.weightH2};
    font-size: ${(p) => p.theme.font.sizeH2};
    line-height: ${(p) => p.theme.font.lineHeightH2};
    margin: ${(p) => p.theme.font.margin};
    color: ${(p) => p.theme.mainTheme.color.dark};
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  input {
    font-family: ${(p) => p.theme.font.family};
    font-style: normal;
  }

  @media (max-width: 1295px) {
    p {
      font-size: ${(p) => p.theme.font.sizePMiddle};
    }
  }
}
`;
