import { Header } from './components/Header/Header';
import { Router } from './router/routes';
import { Template } from './template/default/index';

export function App() {
  
  return (
    <Template>
      <Header />
      <Router />
    </Template>
  )
}