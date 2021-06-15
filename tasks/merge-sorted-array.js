export const merge = (nums1, m, nums2, n) => {
  [...nums1.slice(0, m), ...nums2.slice(0, n)]
    .sort((a, b) => a - b)
    .forEach((e, i) => (nums1[i] = e));
};
