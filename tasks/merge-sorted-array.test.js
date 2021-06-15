import { merge } from './merge-sorted-array';

describe('Merge sorted array', () => {
  it('test 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1.toString()).toBe([1, 2, 2, 3, 5, 6].toString());
  });

  it('test 2', () => {
    const nums1 = [1];
    const m = 1;
    const nums2 = [];
    const n = 0;
    merge(nums1, m, nums2, n);
    expect(nums1.toString()).toBe([1].toString());
  });

  it('test 3', () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;
    merge(nums1, m, nums2, n);
    expect(nums1.toString()).toBe([1].toString());
  });
});
