import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICat } from '@core/types';
import catApi from '../../../api/catApi';

export interface CatsState {
  data: Array<ICat>;
  isLoading: boolean;
  isLoadingNextPage: boolean;
  isError: boolean;
  hasNextPage: boolean;
}

const initialState: CatsState = {
  data: [],
  isLoading: false,
  isLoadingNextPage: false,
  isError: false,
  hasNextPage: false,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatsAsync.pending, (state) => {
        state.isLoading = !state.data.length;
        state.isLoadingNextPage = !!state.data.length;
        state.isError = false;
      })
      .addCase(fetchCatsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isLoadingNextPage = false;
        state.data = [...state.data, ...action.payload];
        state.hasNextPage = action.payload.length === 10;
      })
      .addCase(fetchCatsAsync.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isLoadingNextPage = false;
      });
  },
});

export const { setReset } = catsSlice.actions;

export default catsSlice.reducer;
