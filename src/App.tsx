import { useState } from 'react';
import { Header } from './components/Header/Header';
import { ListOfAlbums } from './components/ListOfAlbums/ListOfAlbums';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Template } from './template/default/index';

export function App() {

  const [searchTerm, setSearchTerm] = useState<string>();

  const handleSetSearchTerm = (term: string) => {
    setSearchTerm(term);
  };
  
  return (
    <Template>
      <Header />
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
    </Template>
  )
}