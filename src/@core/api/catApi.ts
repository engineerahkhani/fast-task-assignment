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
