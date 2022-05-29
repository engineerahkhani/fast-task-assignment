import React, { useEffect } from 'react';
import Flex from '@core/components/atoms/Flex';
import List from './partials/components/List';
import LoadMore from './partials/components/LoadMore';
import { createUseStyles } from '@core/utils/makeStyle';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '@core/hooks/useAppDispatch';
import { fetchCatsAsync, setReset } from '@core/redux/reducers/cats/catsSlice';
import { useAppSelector } from '../../@core/hooks/useAppSelector';

const CatsList = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useAppSelector((state) => state.cats);
  const [page, setPage] = useState(0);
  const { category = '1' } = useParams();

  useEffect(() => {
    dispatch(setReset());
    dispatch(fetchCatsAsync({ category: category, page: 0 }));
  }, [category]);

  useEffect(() => {
    if (page > 1) dispatch(fetchCatsAsync({ category: category, page }));
  }, [page]);

  const onClickLoadMore = () => setPage((prev) => prev + 1);

  return (
    <Flex className={classes.catsListRoot}>
      <List list={data} isLoading={isLoading} isError={isError} />
      {!isLoading && (
        <LoadMore disabled={isLoading} onClick={onClickLoadMore} />
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
