import { get } from './get-function.js';

const url = 'https://rickandmortyapi.com/api/character/483';
const brokenUrl = 'broken';

test('get with normal url', () => {
  get(url).then((res) => expect(res.id).toBe(483));
});

test('get with broken url', () => {
  get(brokenUrl).catch((err) => expect(err).toBe('URL недоступен'));
});
