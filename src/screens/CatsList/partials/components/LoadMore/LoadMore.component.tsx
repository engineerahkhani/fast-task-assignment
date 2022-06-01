import React from 'react';
import Button from '@core/components/atoms/Button';
import useTranslation from '@core/hooks/useTranslation';
import { createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '@core/types/theme';

interface LoadMoreProps {
  onClick: () => void;
  disabled: boolean;
}

const LoadMore: React.FC<LoadMoreProps> = ({ disabled, onClick }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Button
      className={classes.loadMoreRoot}
      disabled={disabled}
      onClick={onClick}
    >
      {t('load_more')}
    </Button>
  );
};

const useStyles = createUseStyles(({ sizes }: ITheme) => ({
  loadMoreRoot: {
    margin: [[sizes.md, 'auto']],
    width: 250,
  },
}));

export default LoadMore;
