const CACHE_TIME = 5 * 60 * 1000;

export const getCache = (key) => {
  const item = localStorage.getItem(key);
  if (!item) return null;

  const parsed = JSON.parse(item);

  if (Date.now() - parsed.time > CACHE_TIME) {
    localStorage.removeItem(key);
    return null;
  }

  return parsed.data;
};

export const setCache = (key, data) => {
  localStorage.setItem(
    key,
    JSON.stringify({
      data,
      time: Date.now(),
    })
  );
};