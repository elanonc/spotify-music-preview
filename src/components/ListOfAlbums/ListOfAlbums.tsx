import { AlbumItem } from '../AlbumItem/AlbumItem';
import { Container, Subtitle, Wrapper } from './styles';

type AlbumProps = {
  title: string;

}

export function ListOfAlbums({ title, ...props }: AlbumProps) {
  return (
    <Container>
      <Subtitle> { title } </Subtitle>
      <Wrapper>
        <AlbumItem 
          size="medium"
          title="nome do album"
          description="nome do artista"
          imageSize="medium"
        />
        <AlbumItem 
          size="medium"
          title="nome do album"
          description="nome do artista"
          imageSize="medium"
        />
        <AlbumItem 
          size="medium"
          title="nome do album"
          description="nome do artista"
          imageSize="medium"
        />
        <AlbumItem 
          size="medium"
          title="nome do album"
          description="nome do artista"
          imageSize="medium"
        />
      </Wrapper>
    </Container>
  )
}