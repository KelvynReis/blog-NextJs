import { POSTS_URL, URL_WITH_POLULATE } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POSTS_URL}/count?${query}&${URL_WITH_POLULATE}`;
  const numberOfPosts = await fetchJson<string>(url);
  return numberOfPosts;
};
