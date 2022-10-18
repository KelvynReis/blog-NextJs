export const fetchJsonTotal = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const Jsondata = await rawData.json();
  return Jsondata.meta.pagination.total;
};
