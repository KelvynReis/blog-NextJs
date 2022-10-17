import { POSTS_URL } from '../../config/app-config';
import { fetchJsonTotal } from '../../utils/fetch-json-total';

export const countAllPosts = async (): Promise<string> => {
  const url = `${POSTS_URL}`;
  const numberOfPosts = await fetchJsonTotal<string>(url);
  return numberOfPosts;
};
