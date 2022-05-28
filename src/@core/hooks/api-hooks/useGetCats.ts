// @ts-nocheck

import { useEffect } from 'react';
import catApi from '@core/api/catApi';
import { useAppDispatch } from '../useAppDispatch';
import {
  CatsState,
  setError,
  setLoading,
  setSuccess,
  setReset,
  loadMore as loadMoreCats,
} from '@core/redux/reducers/cats/catsSlice';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../useAppSelector';

const useGetCats = (): CatsState & { loadMore: () => void } => {
  const appDispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cats);
  const page = state.page;
  const { category } = useParams();

  useEffect(() => {
    appDispatch(setReset());
    getData();
  }, [category]);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    console.log(state);
    appDispatch(setLoading());
    catApi
      .getCatsByCategory({ page, category })
      .then((res) => {
        appDispatch(
          setSuccess({ data: [...state.data, ...res], hasNextPage: true })
        );
      })
      .catch(() => {
        appDispatch(setError());
      });
  };

  const loadMore = () => {
    appDispatch(loadMoreCats());
  };

  return {
    ...state,
    loadMore,
  };
};

export default useGetCats;
