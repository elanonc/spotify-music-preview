import { AlbumItem } from "../../components/AlbumItem/AlbumItem";
import { TrackItem } from "../../components/TrackItem/TrackItem";
import { Container, Row, Column } from "./styles";

export function ListTrack(){
  return (
    <Container>
      <Row>
        <h2> voltar</h2>
      </Row>
      <Column>
        <AlbumItem />
        <TrackItem />
      </Column>
    </Container>
  ) 
}