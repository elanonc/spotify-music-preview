import { Container, Label, Input } from './styles';

export function SearchBar() {
  return (
    <Container>
      <Label>Busque por artistas, álbuns ou músicas.</Label>
      <Input
        type="text"
        placeholder="Comece a escrever..."
      />
    </Container>
  )
}