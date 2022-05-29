// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import APP_CONFIG from '../constants/app-config';
// import { ICat } from '../types';
// import END_POINTS from '../constants/endpoints';
//
// export const catsApi = createApi({
//   reducerPath: 'catsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: APP_CONFIG.apiBaseUrl,
//     headers: {
//       api_key: APP_CONFIG.apiKey,
//     },
//   }),
//   endpoints: (builder) => ({
//     getCatsByCategory: builder.query<Array<ICat>, string>({
//       query: ({ category, page }: any) => {
//         return {
//           url: END_POINTS.cats,
//           params: { limit: 10, category_ids: category, page },
//         };
//       },
//     }),
//   }),
// });
//
// export const { useGetCatsByCategoryQuery } = catsApi;

import request from '../utils/request';
import END_POINTS from '../constants/endpoints';
import APP_CONFIG from '../constants/app-config';
import { ICat } from '../types';

interface IGetCatsByFilter {
  page?: number;
  category?: string;
}

const getCatsByCategory = async ({ page, category }: IGetCatsByFilter) => {
  const url = END_POINTS.cats;

  const { data } = await request.get<Array<ICat>>(url, {
    params: {
      api_key: APP_CONFIG.apiKey,
      language: APP_CONFIG.defaultLang,
      page,
      category_ids: category,
      limit: 10,
    },
  });

  return data;
};

const exports = { getCatsByCategory };

export default exports;
