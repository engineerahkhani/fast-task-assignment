import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import catReducer from './reducers/cats/catsSlice';
import { catsApi } from '../api/catApi';
import { categoriesApi } from '../api/categoryApi';

export const store = configureStore({
  reducer: {
    cats: catReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [catsApi.reducerPath]: catsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catsApi.middleware, categoriesApi.middleware),
});

setupListeners(store.dispatch);
