import { moveZeroes } from './move-zeros';

describe('move zeros', () => {
  it('test 1', () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums.toString()).toBe([1, 3, 12, 0, 0].toString());
  });

  it('test 2', () => {
    const nums = [0];
    moveZeroes(nums);
    expect(nums.toString()).toBe([0].toString());
  });

  it('test 3', () => {
    const nums = [0, 0, 1];
    moveZeroes(nums);
    expect(nums.toString()).toBe([1, 0, 0].toString());
  });
});
