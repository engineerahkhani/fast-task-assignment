import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICat } from '@core/types';

export interface CatsState {
  data: Array<ICat>;
  isLoading: boolean;
  isLoadingNextPage: boolean;
  isError: boolean;
  hasNextPage: boolean;
  page: number;
}

const initialState: CatsState = {
  data: [],
  isLoading: false,
  isLoadingNextPage: false,
  isError: false,
  hasNextPage: false,
  page: 0,
};

export const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setLoading: (state) => ({
      ...state,
      isLoading: state.page === 0,
      isError: false,
      isLoadingNextPage: state.page > 0,
    }),
    setSuccess: (
      state,
      action: PayloadAction<{ data: Array<ICat>; hasNextPage: boolean }>
    ) => ({
      ...state,
      isLoading: false,
      isLoadingNextPage: false,
      isError: false,
      data: [...state.data, ...action.payload.data],
      hasNextPage: action.payload.hasNextPage,
    }),
    setError: (state) => ({
      ...state,
      isLoading: false,
      isLoadingNextPage: false,
      isError: true,
    }),
    loadMore: (state) => ({
      ...state,
      page: state.page + 1,
    }),
  },
});

export const { setError, loadMore, setLoading, setSuccess } = catsSlice.actions;

export default catsSlice.reducer;
