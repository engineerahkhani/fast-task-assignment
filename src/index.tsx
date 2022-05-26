import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider, store } from '@core/redux';
import LanguageProvider from '@core/contexts/Language';
import ThemeProvider from '@core/contexts/Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </LanguageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
