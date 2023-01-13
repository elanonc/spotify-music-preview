import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 175px;
  text-align: center;
`;

export const Image = styled.img`
  width: 160px;
  height: 175px;
`

export const Title = styled.h3`
  font-size: var(--font-small);
  color: var(--tertiary);
  margin: 10px;
`;

export const Description = styled.h4`
  font-size: var(--font-small);
  color: var(--secondary);
`
