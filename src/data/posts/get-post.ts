import { POSTS_URL, URL_WITH_POLULATE } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (slug: string): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?filters[slug]=${slugString}&${URL_WITH_POLULATE}`;
  const jsonPosts = await fetchJson<PostData[]>(url);

  const content = await markdownToHtml(jsonPosts[0].attributes.content);

  const finalContent = {
    ...jsonPosts[0],
    attributes: { ...jsonPosts[0].attributes, content },
  };

  return [finalContent];
};
