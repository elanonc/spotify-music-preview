import { ReactNode } from 'react';
import { Header } from '../../components/Header/Header';
import { Container } from './styles';

type ReactProps = {
  children: ReactNode;
};

export function Template({ children } : ReactProps ) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}