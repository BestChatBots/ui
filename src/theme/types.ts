export interface Theme {
  colors: ThemeColors;
  fonts: ThemeFonts;
  tablet: ThemeTablet;
  mobile: ThemeMobile;
  zIndex: ThemeZIndex;
  header: ThemeHeader;
  drawer: ThemeDrawer;
  table: ThemeTable;
}

export interface ThemeBaseColors {
  black: string;
  white: string;
}

export interface ThemeAccentColors {
  primary: string;
  strong: string;
  strongDown: string;
}

export interface ThemeGrayScaleColors {
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
}

export interface ThemeColors {
  base: ThemeBaseColors;
  accent: ThemeAccentColors;
  grayScale: ThemeGrayScaleColors;
  orange: string;
  headlineGradient: string;
  success: string;
  error: string;
  successDark: string;
  info: string;
}

export interface ThemeTablet {
  maxWidth: string;
}

export interface ThemeMobile {
  maxWidth: string;
  minWidth: string;
}

export interface ThemeZIndex {
  header: number;
  backdrop: number;
  modal: number;
  headerMenu: number;
  select: number;
  notifications: number;
  tooltip: number;
  menu: number;
  drawer: number;
}

export interface ThemeHeaderTablet {
  height: string;
}

export interface ThemeHeaderMobile {
  height: string;
}

export interface ThemeHeader {
  height: string;
  tablet: ThemeHeaderTablet;
  mobile: ThemeHeaderMobile;
}

export interface ThemeRubikFonts {
  semiBold: string;
  medium: string;
  regular: string;
}

export interface ThemeFonts {
  rubik: ThemeRubikFonts;
}

export interface ThemeDrawer {
  width: string;
}

export interface ThemeTable {
  maxWidth: string;
  minWidth: string;
}
