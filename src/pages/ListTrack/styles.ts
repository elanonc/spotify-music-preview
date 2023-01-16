import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 140px;
  color: var(--secondary);
  h2 {
    font-size: var(--font-small);
    font-weight: normal;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
`;


export const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  gap: 35px;
`;

