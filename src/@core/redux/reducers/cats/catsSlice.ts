import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICat } from '@core/types';
import catApi from '../../../api/catApi';

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

export const fetchCatsAsync = createAsyncThunk(
  'cats/fetchCategory',
  async ({ category, page }: { category: string; page: number }) => {
    const response = await catApi.getCatsByCategory({ category, page });
    return response;
  }
);

export const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setReset: () => initialState,
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
      data: action.payload.data,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatsAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCatsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = [...state.data, ...action.payload];
      })
      .addCase(fetchCatsAsync.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { setReset } = catsSlice.actions;

export default catsSlice.reducer;
