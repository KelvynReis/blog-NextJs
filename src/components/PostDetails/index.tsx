import { Date } from '../Date';
import { Container } from './styled';

export type PostDetailsProps = {
  date: string;
  category: string;
};

export const PostDetails = ({ category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> | {category}
    </Container>
  );
};
