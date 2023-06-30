import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      white: string;
      black: string;
      red: string;
      orange: string;
      green: string;
    };

    fonts: {
      family: {
        poppins: string;
      };

      weight: {
        normal: number;
        semiBold: number;
      };
    };

    transitions: {
      fast: string;
      medium: string;
      slow: string;
    };
  }
}
