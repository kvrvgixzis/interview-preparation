/**
 * Дан массив целых неповторяющихся целых
 * положительных чисел, надо вернуть строку
 * где отличающиеся на один числа свернуты
 *
 * дано [6,1,3,9,2,4,11,7]
 * вернуть “1-4,6-7,9,11"
 */

export const collapseNumbers = (numbers) => {
  numbers = numbers.sort((a, b) => a - b);
  const chunks = [];

  let chunk = [];
  numbers.forEach((num) => {
    chunk.push(num);

    const nextNum = numbers.find((n) => n === num + 1);
    if (!nextNum) {
      chunks.push(chunk);
      chunk = [];
    }
  });

  return chunks
    .map((chunk) =>
      chunk.length === 1
        ? chunk[0]
        : `${chunk[0]}-${chunk[chunk.length - 1]}`
    )
    .join(', ');
};
