import React from 'react';
import Loading from './List.loading';
import Flex from '@core/components/atoms/Flex';
import Alert from '@core/components/molecules/Alert';
import Card from '@core/components/organisms/CatCard';
import { ICat } from '@core/types';
import useTranslation from '@core/hooks/useTranslation';
import { createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '../../../../../@core/types/theme';

interface IListProps {
  isLoading: boolean;
  isError: boolean;
  list: ICat[];
}

const CatsList: React.FC<IListProps> = ({ isLoading, isError, list }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <Alert type="Error" title={t('oops')} description={t('api_error_desc')} />
    );
  if (!list?.length)
    return (
      <Alert
        type="EmptyList"
        title={t('emptyList_title')}
        description={t('emptyList_desc')}
      />
    );

  return (
    <Flex className={classes.listComponentRoot}>
      {list?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </Flex>
  );
};

const useStyles = createUseStyles(({ sizes }: ITheme) => ({
  listComponentRoot: {
    padding: sizes.sm,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));

export default CatsList;
