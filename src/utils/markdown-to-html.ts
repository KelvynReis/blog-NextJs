import { remark } from 'remark';
import html from 'remark-html';

export const markdownToHtml = async (content: string): Promise<string> => {
  const result = await remark().use(html).process(content);
  return String(result);
};
