/**
 * Дан массив целых неповторяющихся целых
 * положительных чисел, надо вернуть строку
 * где отличающиеся на один числа свернуты
 *
 * дано [6,1,3,9,2,4,11,7]
 * вернуть “1-4,6-7,9,11"
 */

const compareArray = (numbers) => {
  numbers = numbers.sort((a, b) => a - b);
  const chunks = [];

  let chunk = [];
  numbers.forEach((num) => {
    chunk.push(num);

    if (!numbers.find((n) => n === num + 1)) {
      chunks.push(chunk);
      chunk = [];
    }
  });

  return chunks
    .map((c) => (c.length === 1 ? c[0] : `${c[0]}-${c[c.length - 1]}`))
    .join(', ');
};

const answer = compareArray([6, 1, 3, 9, 2, 4, 11, 7]);
console.log('answer: ', answer);
