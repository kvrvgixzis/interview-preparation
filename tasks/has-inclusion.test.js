const checkInclusion = (s1, s2) => {
  s1 = s1.split('');
  s2 = s2.split('');
  const inclusionsIndexes = [];

  s2.forEach((letter, i) => {
    if (s1.includes(letter)) {
      inclusionsIndexes.push(i);
    }
  });

  let hasInclusion = true;
  inclusionsIndexes
    .sort((a, b) => a - b)
    .forEach((index, i, array) => {
      if (i === 0) return;
      const prevIndex = array[i - 1];
      if (prevIndex + 1 !== index) hasInclusion = false;
    });

  return hasInclusion;
};

describe('has inclusion', () => {
  it('test 1', () => {
    expect(checkInclusion('hello', 'ooolleoooleh')).toBe(false);
  });
});
