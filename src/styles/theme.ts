import type { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  borderRadius: '16px',
  font: {
    family: 'Poppins',
    sizeH2: '40px',
    sizeP: '20px',
    sizePMiddle: '16px',
    sizePSmall: '14px',
    lineHeightH2: '60px',
    lineHeightP: '30px',
    weightH2: '700',
    weightP: '500',
    margin: '0',
  },
  mainTheme: {
    color: {
      white: '#FFFFFF',
      darkBlue: '#344966',
      dark: '#0D1821',
      light: '#F0F4EF',
      green: '#BFCC94',
      darkGreen: '#8D9F4F',
      lightGrey: '#D6D8E7',
      darkGrey: '#B9BAC4',
      error: '#ED2E7E',
      lightError: '#FFF2F7',
    },
  },
};
