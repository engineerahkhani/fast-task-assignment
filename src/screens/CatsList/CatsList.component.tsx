import React, { useEffect } from 'react';
import Flex from '@core/components/atoms/Flex';
import List from './partials/components/List';
import LoadMore from './partials/components/LoadMore';
import { createUseStyles } from '@core/utils/makeStyle';
import { useGetCatsByCategoryQuery } from '@core/api/catApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ICat } from '../../@core/types';

const CatsList = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [cats, setCats] = useState<Array<ICat>>([]);
  const { category } = useParams();
  const { data, error, isLoading, isFetching } = useGetCatsByCategoryQuery({
    category,
    page,
  } as any);

  useEffect(() => {
    setCats((prev) => [...prev, ...(data || [])]);
  }, [isFetching]);

  const onClickLoadMore = () => setPage((prev) => prev + 1);

  return (
    <Flex className={classes.catsListRoot}>
      <List list={cats} isLoading={isLoading} isError={!!error} />
      {!isLoading && (
        <LoadMore disabled={isFetching} onClick={onClickLoadMore} />
      )}
    </Flex>
  );
};
const useStyles = createUseStyles({
  catsListRoot: {
    width: '100%',
  },
});
export default CatsList;
