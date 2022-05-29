import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import catReducer from './reducers/cats/catsSlice';
import { categoriesApi } from '../api/categoryApi';

export const store = configureStore({
  reducer: {
    cats: catReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});

setupListeners(store.dispatch);
