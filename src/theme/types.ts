interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  buttonBackground: string;
  buttonColor: string;
  buttonHoverBackground: string;
  white: string;
}

interface Typography {
  fontFamily: string;
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
  lineHeight: string;
}

interface Spacing {
  small: string;
  medium: string;
  large: string;
}

export interface Theme {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
}
