import { get } from './get-function.js';

const url = 'https://rickandmortyapi.com/api/character/483';
const brokenUrl = 'broken';

it('get function', () => {
  get(url).then((res) => expect(res.id).toBe(483));
  get(brokenUrl).catch((err) => expect(err).toBe('URL недоступен'));
});
