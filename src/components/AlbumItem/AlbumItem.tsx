import { Container, Title, Description, Image } from './styles';

export function AlbumItem() {
  return (
    <Container>
      <Image src="https://via.placeholder.com/160/175" />
      <Title>Nome do álbum</Title>
      <Description>Nome do artista</Description>
    </Container>
  )
}