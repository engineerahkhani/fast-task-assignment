import React from 'react';
import { ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import theme from '@core/themes';

interface ILanguageProvider {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ILanguageProvider> = ({ children }) => {
  return (
    <ReactJssThemeProvider theme={theme}>{children}</ReactJssThemeProvider>
  );
};

export default ThemeProvider;
