import { POSTS_URL, URL_WITH_POLULATE } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}?${query}&${URL_WITH_POLULATE}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
