import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Template } from './template/default/index';

export function App() {

  return (
    <Template>
      <Header />
      <SearchBar />
    </Template>
  )
}