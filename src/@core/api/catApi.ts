import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APP_CONFIG from '../constants/app-config';
import { ICat } from '../types';
import END_POINTS from '../constants/endpoints';

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APP_CONFIG.apiBaseUrl,
    headers: {
      api_key: APP_CONFIG.apiKey,
    },
  }),
  endpoints: (builder) => ({
    getCatsByCategory: builder.query<Array<ICat>, string>({
      query: ({ category, page }: any) => {
        return {
          url: END_POINTS.cats,
          params: { limit: 10, category_ids: category, page },
        };
      },
    }),
  }),
});

export const { useGetCatsByCategoryQuery } = catsApi;
