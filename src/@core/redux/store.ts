import { configureStore } from '@reduxjs/toolkit';
import catReducer from './reducers/cats/catsSlice';
import categoryReducer from './reducers/category/categorySlice';

export const store = configureStore({
  reducer: {
    cats: catReducer,
    category: categoryReducer,
  },
});
