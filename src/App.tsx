import MainTemplate from '@core/components/templates/MainLayout';
import ErrorBoundary from '@core/components/atoms/ErrorBoundary';
import Routes from './Routes';
import { createUseStyles } from '@core/utils/makeStyle';
import cssReset from '@core/utils/cssReset';
import globalCss from '@core/utils/globalCss';

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

const useStyles = createUseStyles(() => ({
  '@global': {
    ...cssReset,
    ...globalCss,
    script: {
      display: 'none',
    },
    body: {
      // background: colors.background,
    },
  },
}));

export default App;
