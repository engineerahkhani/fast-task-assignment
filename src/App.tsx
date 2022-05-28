import MainTemplate from '@core/components/templates/MainLayout';
import ErrorBoundary from '@core/components/atoms/ErrorBoundary';
import { createUseStyles } from '@core/utils/makeStyle';
import cssReset from '@core/utils/cssReset';
import globalCss from '@core/utils/globalCss';
import { ITheme } from './@core/types/theme';
import Routes from './Routes';

function App() {
  useStyles();

  return (
    <ErrorBoundary>
      <MainTemplate>
        <Routes />
      </MainTemplate>
    </ErrorBoundary>
  );
}

const useStyles = createUseStyles(({ colors }: ITheme) => ({
  '@global': {
    ...cssReset,
    ...globalCss,
    script: {
      display: 'none',
    },
    body: {
      background: colors.background,
    },
  },
}));

export default App;
