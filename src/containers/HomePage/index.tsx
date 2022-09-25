import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  console.log(posts);

  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              cover={post.cover.formats.medium.url}
              title={post.title}
              slug={post.slug}
            />
          ))}
        </Container>
      </MainContainer>
    </>
  );
}
