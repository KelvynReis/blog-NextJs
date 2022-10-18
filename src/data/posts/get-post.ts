import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (slug: string): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?filters[slug]=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);

  const content = await markdownToHtml(jsonPosts[0].attributes.content);

  const finalContent = {
    ...jsonPosts[0],
    attributes: { ...jsonPosts[0].attributes, content },
  };
  console.log(finalContent);

  return [finalContent];
};
