/** Given an integer array nums,
 * move all 0's to the end of it while
 * maintaining the relative order of
 * the non-zero elements.
 *
 * Note that you must do this
 * in-place without making a copy of the array.*/

export const moveZeroes = (nums) => {
  let index = 0;
  let iterations = 0;
  while (iterations < nums.length) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      nums.push(0);
    } else {
      index++;
    }
    iterations++;
  }
};
