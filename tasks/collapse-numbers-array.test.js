import { collapseNumbers } from './collapse-numbers-array.js';

test('collapse numbers array', () => {
  expect(collapseNumbers([6, 1, 3, 9, 2, 4, 11, 7])).toBe(
    '1-4, 6-7, 9, 11'
  );
});
