import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map(
            (post) => (
              console.log(post.attributes.cover.data.attributes.formats.medium),
              (
                <PostCard
                  key={post.id}
                  cover={post.attributes.cover.data.attributes.url}
                  title={post.attributes.title}
                  slug={post.attributes.slug}
                />
              )
            ),
          )}
        </Container>
      </MainContainer>
    </>
  );
}
