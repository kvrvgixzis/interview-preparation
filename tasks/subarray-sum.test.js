import { subarraySum } from './subarray-sum';

describe('subarray sum', () => {
  it('test 1', () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2);
  });

  it('test 2', () => {
    expect(subarraySum([1, 2, 3], 3)).toBe(2);
  });
});
