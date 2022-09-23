import Header from '../../components/Header';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <Container>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.attributes.title}</h1>
            <p>{post.attributes.content}</p>
          </div>
        ))}
      </Container>
    </>
  );
}
