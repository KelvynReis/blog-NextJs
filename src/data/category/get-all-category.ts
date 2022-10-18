import { POSTS_URL, URL_WITH_POLULATE } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllCategory = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}?filters[category][name]=${query}&${URL_WITH_POLULATE}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
