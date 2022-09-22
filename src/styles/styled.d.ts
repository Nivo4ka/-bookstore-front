import 'styled-components';

interface IPalette {
  color: {
    white: string;
    darkBlue: string;
    dark: string;
    light: string;
    green: string;
    darkGreen: string;
    lightGrey: string;
    darkGrey: string;
    error: string;
    lightError: string;
  };
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    borderRadius: string;
    font: {
      family: string;
      sizeH2: string;
      sizeP: string;
      sizePMiddle: string;
      sizePSmall: string;
      lineHeightH2: string;
      lineHeightP: string;
      weightH2: string;
      weightP: string;
      margin: string;
    };
    mainTheme: IPalette;
    // darkTheme: IPalette;
  }
}
