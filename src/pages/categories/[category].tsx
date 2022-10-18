import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllCategory } from '../../data/category/get-all-category';
import { PostData } from '../../domain/posts/post';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return (
    <>
      <HomePage category={category} posts={posts} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `${ctx.query.category}`;
  const posts = await getAllCategory(urlQuery);

  return {
    props: {
      posts,
      category: urlQuery,
    },
  };
};
