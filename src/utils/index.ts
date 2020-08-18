import queryString from 'query-string';

export const getObjectFromString = (search: string): { keyword: string; category: string; } => {
  const { keyword, category } = queryString.parse(search);
  const key = keyword || "", cat = category || "";
  const res = {
    keyword: key instanceof Array
      ? key[key.length - 1] || ""
      : key,
    category: cat instanceof Array
      ? cat[cat.length - 1] || ""
      : cat,
  };
  return res;
}
