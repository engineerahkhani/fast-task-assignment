import React from 'react';
import Button from '@core/components/atoms/Button';
import useTranslation from '@core/hooks/useTranslation';
import { loadMore } from '@core/redux/reducers/cats/catsSlice';

interface LoadMoreProps {
  onClick: () => void;
  disabled:boolean
}

const LoadMore: React.FC<LoadMoreProps> = ({disabled, onClick }) => {
  const { t } = useTranslation();

  return (
    <Button disabled={disabled} variant="secondary" onClick={onClick}>
      {t('loadMore')}
    </Button>
  );
};

export default LoadMore;
