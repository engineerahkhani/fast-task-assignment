import request from '../utils/request';
import END_POINTS from '../constants/endpoints';
import APP_CONFIG from '../constants/app-config';
import { ICategory } from '../types';

const getCategories = async () => {
  const url = END_POINTS.categories;

  const { data } = await request.get<Array<ICategory>>(url, {
    params: {
      api_key: APP_CONFIG.apiKey,
      language: APP_CONFIG.defaultLang,
    },
  });

  return data;
};

const exports = { getCategories };

export default exports;
