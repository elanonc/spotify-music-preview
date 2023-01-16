import { AlbumItem } from "../../components/AlbumItem/AlbumItem";
import { Container, Row, Column } from "./styles";

export function ListTrack(){
  return (
    <Container>
      <Row>
        <h2> voltar</h2>
      </Row>
      <Column>
        <AlbumItem />
        <p>1</p>
        <p>1</p>
      </Column>
    </Container>
  ) 
}