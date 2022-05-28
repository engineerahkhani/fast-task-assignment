export interface IColors {
  white: string;
  black: string;
  lightgray: string;
  gray: string;
  whitesmoke: string;
  red: string;
  primary: string;
  secondary: string;
  darkBlue: string;
  body: string;
  background: string;
  lightBackground: string;
  darkBackground: string;
}

export interface IDarkColors {
  white: string;
  body: string;
}

export interface IFonts {
  untitled: string;
  mono: string;
}

export interface ISpace {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
}

export interface ISizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xlg: string;
  sideBarWidth: string;
  contentMaxWidth: string;
  topHeaderHeight: string;
  headerMenuHeight: string;
}

export interface IFontSizes {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
}

export interface IRadii {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  round: string;
  pill: string;
}

export interface IZIndices {
  1: string;
  2: string;
  3: string;
  4: string;
  max: string;
}

export interface IMedia {
  tablet: string;
  desktop: string;
  bigDesktop: string;
}

export interface ITheme {
  colors: IColors;
  darkColors: IDarkColors;
  fonts: IFonts;
  space: ISpace;
  sizes: ISizes;
  fontSizes: IFontSizes;
  radii: IRadii;
  zIndices: IZIndices;
  media: IMedia;
}
