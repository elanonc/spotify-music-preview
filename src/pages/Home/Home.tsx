import { useState } from 'react';

import { ListOfAlbums } from '../../components/ListOfAlbums/ListOfAlbums';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Container } from './styles';

export function Home() {
  
  const [searchTerm, setSearchTerm] = useState<string>();

  const handleSetSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <Container>
      <SearchBar 
          searchTerm={searchTerm}
          handleSetSearchTerm={handleSetSearchTerm}
        />
        <ListOfAlbums 
          title={searchTerm ? `Resultados encontrados para "${searchTerm}"` : "Álbuns buscados recentemente"}
        />
        {
          !searchTerm &&
          <ListOfAlbums 
            title="Álbuns buscados recentemente"
          />
        }
    </Container>
  )
}