import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 140px;
  margin-bottom: 80px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 65px; 
  overflow-x: clip;
`

export const Subtitle = styled.h2`
  font-size: var(--font-medium);
  font-weight: normal;
  color: var(--tertiary);
  margin-bottom: 35px;
`
