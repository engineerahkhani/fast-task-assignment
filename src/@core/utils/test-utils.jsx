import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import catReducer from '../redux/reducers/cats/catsSlice';
import ThemeProvider from '../contexts/Theme';
import { BrowserRouter } from 'react-router-dom';
import LanguageProvider from '../contexts/Language';
import { categoriesApi } from '../api/categoryApi';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        cats: catReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(categoriesApi.middleware),
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <LanguageProvider>
          <Provider store={store}>
            <ThemeProvider>{children}</ThemeProvider>
          </Provider>
        </LanguageProvider>
      </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
