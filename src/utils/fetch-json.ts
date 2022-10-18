export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const Jsondata = await rawData.json();
  return Jsondata.data;
};
