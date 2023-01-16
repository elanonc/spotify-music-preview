import { Container, Title, Description, Image } from './styles';

type AlbumItemProps = {
  size: string;
  title?: string;
  description: string;
  imageSize: string;
}

export function AlbumItem({ size, title, imageSize, description }:AlbumItemProps) {
  return (
    <Container size={size}>
      <Image imageSize={imageSize} src="https://via.placeholder.com/160/175" />
      <Title>{ title }</Title>
      <Description>{ description }</Description>
    </Container>
  )
}