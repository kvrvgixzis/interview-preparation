/**
 * Необходимо написать функцию, которая на вход принимает урл,
 * асинхронно ходит по этому урлу GET запросом и возвращает данные (json)
 * Для получения данных можно использовать $.get или fetch.
 * Если во время запроса произошла ошибка, то пробовать запросить еще 5 раз.
 * Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".
 */

import fetch from 'node-fetch';

const get = async (url, limit = 5) => {
  try {
    console.log('Start fetching');
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    if (limit === 1) throw `URL ${url} недоступен`;
    return await get(url, limit - 1);
  }
};

const url = 'https://rickandmortyapi.com/api/character/483';
const brokenUrl = 'https://rickandmortpi.com/api/character/483';

get(url)
  .then((res) => console.log('res: ', res))
  .catch((err) => console.error('err: ', err));

get(brokenUrl)
  .then((res) => console.log('res: ', res))
  .catch((err) => console.error('err: ', err));
