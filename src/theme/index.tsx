import './styled.d.ts';
import React, { useContext, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider, ThemeContext } from 'styled-components';
import { Theme } from './types';

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const theme = useMemo<Theme>(() => ({
    colors: {
      base: {
        white: '#FFFFFF',
        black: '#161619'
      },
      accent: {
        primary: '#F25124',
        strong: '#BC3C18',
        strongDown: '#801D02'
      },
      grayScale: {
        800: '#1B1E28',
        700: '#242E3F',
        600: '#3A4B62',
        500: '#6B7280',
        400: '#9CA3AF',
        300: '#D1D5DB',
        200: '#E5E7EB',
        100: '#F3F4F6'
      },
      orange: '#FFB038',
      headlineGradient: 'linear-gradient(180deg, #FFF 69.55%, #F18669 97.73%)',
      success: '#19CD15',
      error: '#F72525',
      successDark: '#126010',
      info: '#248FF2'
    },
    fonts: {
      rubik: {
        semiBold: 'var(--bestchatbots-rubik-semibold)',
        medium: 'var(--bestchatbots-rubik-medium)',
        regular: 'var(--bestchatbots-rubik-regular)'
      }
    },
    tablet: {
      maxWidth: '1060px'
    },
    mobile: {
      maxWidth: '550px',
      minWidth: '400px'
    },
    zIndex: {
      headerMenu: 2,
      header: 3,
      backdrop: 4,
      menu: 5,
      drawer: 6,
      modal: 7,
      select: 8,
      notifications: 9,
      tooltip: 10
    },
    header: {
      height: '78px',
      tablet: {
        height: '70px'
      },
      mobile: {
        height: '70px'
      }
    },
    drawer: {
      width: '270px'
    },
    table: {
      maxWidth: '1040px',
      minWidth: '1040px'
    }
  }), []);

  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  );
};

export function useTheme(): Theme {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('useTheme must be used within a ThemeProvider.');
  }

  return value;
}

export * from './types';
