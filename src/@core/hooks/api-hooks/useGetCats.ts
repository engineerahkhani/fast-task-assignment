import { useEffect } from 'react';
import catApi from '@core/api/catApi';
import { useAppDispatch } from '../useAppDispatch';
import {
  CatsState,
  setError,
  setLoading,
  setSuccess,
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
    getData();
  }, [category, page]);

  const getData = () => {
    appDispatch(setLoading());
    catApi
      .getCatsByCategory({ page, category })
      .then((res) => {
        appDispatch(setSuccess({ data: res, hasNextPage: true }));
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
