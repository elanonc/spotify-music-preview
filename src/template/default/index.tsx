import { ReactNode } from 'react';
import { Container } from './styles';

type ReactProps = {
  children: ReactNode;
};

export function Template({ children } : ReactProps ) {
  return (
    <Container>
      {children}
    </Container>
  )
}