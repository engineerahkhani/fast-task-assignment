import reducer, { setReset, initialState } from './catsSlice';

describe('catSlice Test', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, setReset())).toEqual(initialState);
  });
  test('should return the initial state', () => {
    expect(reducer(undefined, setReset())).not.toEqual(undefined);
  });
});
