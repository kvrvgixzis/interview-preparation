import fetch from 'node-fetch';

export const get = async (url, limit = 5) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    if (limit === 1) throw 'URL недоступен';
    return await get(url, limit - 1);
  }
};
