import fetch from 'node-fetch';

const get = async (url, limit = 5) => {
  try {
    console.log(`Try fetching ${url}`);
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    if (limit === 1) throw `URL ${url} недоступен`;
    return await get(url, limit - 1);
  }
};

const url = 'https://rickandmortyapi.com/api/character/483';
const brokenUrl = 'broken';

get(url)
  .then((res) => console.log('res: ', res))
  .catch((err) => console.error('err: ', err));

get(brokenUrl)
  .then((res) => console.log('res: ', res))
  .catch((err) => console.error('err: ', err));
