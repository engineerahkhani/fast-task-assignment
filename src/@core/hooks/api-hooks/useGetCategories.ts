import { useEffect } from 'react';
import { useAppDispatch } from '../useAppDispatch';
import {
  CategoryState,
  setError,
  setLoading,
  setSuccess,
} from '@core/redux/reducers/category/categorySlice';
import { useAppSelector } from '../useAppSelector';
import { categoryApi } from '../../api';

const useGetCategories = (): CategoryState => {
  const appDispatch = useAppDispatch();
  const state = useAppSelector((state) => state.category);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    appDispatch(setLoading());
    categoryApi
      .getCategories()
      .then((res) => {
        appDispatch(setSuccess({ data: res }));
      })
      .catch(() => {
        appDispatch(setError());
      });
  };

  return state;
};

export default useGetCategories;
