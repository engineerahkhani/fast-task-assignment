import END_POINTS from '../constants/endpoints';
import APP_CONFIG from '../constants/app-config';
import { ICategory } from '../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APP_CONFIG.apiBaseUrl,
    headers: {
      api_key: APP_CONFIG.apiKey,
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Array<ICategory>, string>({
      query: () => END_POINTS.categories,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
