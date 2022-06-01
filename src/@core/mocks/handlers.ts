import { rest } from 'msw';
import APP_CONFIG from '../constants/app-config';
import END_POINTS from '../constants/endpoints';
import mockResponse from './mocksResponse';

const CATEGORIES_ENDPOINT = `${APP_CONFIG.apiBaseUrl}${END_POINTS.categories}`;
const CATs_ENDPOINT = `${APP_CONFIG.apiBaseUrl}${END_POINTS.cats}`;

export const getCategoriesException = rest.get(
  CATEGORIES_ENDPOINT,
  (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(500),
      ctx.json({ message: 'Internal Server Error' })
    );
  }
);

const getCategoriesSuccess = rest.get(CATEGORIES_ENDPOINT, (req, res, ctx) => {
  return res(ctx.delay(), ctx.json(mockResponse.categories));
});

const getCatsSuccess = rest.get(CATs_ENDPOINT, (req, res, ctx) => {
  return res(ctx.delay(), ctx.json(mockResponse.cats));
});

export const handlers = [
  getCategoriesSuccess,
  getCategoriesException,
  getCatsSuccess,
];
