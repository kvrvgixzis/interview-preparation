/** Given an array of integers nums
 * and an integer k, return the total
 * number of continuous subarrays
 * whose sum equals to k. */

export const subarraySum = (nums, k) => {
  let count = 0;
  let prefixSum = new Map();
  prefixSum.set(0, 1);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let target = sum - k;
    if (prefixSum.has(target)) count += prefixSum.get(target);
    if (!prefixSum.has(sum)) prefixSum.set(sum, 0);
    prefixSum.set(sum, prefixSum.get(sum) + 1);
  }

  return count;
};
