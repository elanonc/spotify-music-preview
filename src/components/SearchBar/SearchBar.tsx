import { Container, Label, Input } from './styles';

type SearchBarProps = {
  handleSetSearchTerm: (prop: string) => void;
  searchTerm: string | undefined;
}

export function SearchBar({ searchTerm, handleSetSearchTerm }: SearchBarProps) {
  return (
    <Container>
      <Label>Busque por artistas, álbuns ou músicas.</Label>
      <Input
        value={searchTerm}
        onChange={(event)=>handleSetSearchTerm(event.target.value)}
        type="text"
        placeholder="Comece a escrever..."
      />
    </Container>
  )
}