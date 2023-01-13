import { useState } from 'react';
import { Header } from './components/Header/Header';
import { ListOfAlbums } from './components/ListOfAlbums/ListOfAlbums';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Template } from './template/default/index';

export function App() {
  return (
    <Template>
      <Header />
      <ListOfAlbums title="Álbuns buscados recentemente"/>
      <ListOfAlbums title="Álbuns buscados recentemente"/>
    </Template>
  )
}