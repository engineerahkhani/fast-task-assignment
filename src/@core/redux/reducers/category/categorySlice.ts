import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '@core/types';

export interface CategoryState {
  categories: Array<ICategory>;
  isLoading: boolean;
  isError: boolean;
}

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  isError: false,
};

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setLoading: (state) => ({
      ...state,
      isLoading: true,
      isError: false,
    }),
    setSuccess: (state, action: PayloadAction<{ data: Array<ICategory> }>) => ({
      isLoading: false,
      isError: false,
      categories: action.payload.data,
    }),
    setError: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const { setError, setLoading, setSuccess } = CategorySlice.actions;

export default CategorySlice.reducer;
