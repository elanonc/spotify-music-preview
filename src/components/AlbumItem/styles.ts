import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--${( props: { size:string } ) => props.size});
  height: var(--${( props: { size:string } ) => props.size});
  text-align: center;
`;

export const Image = styled.img`
  width: var(--${( props: { imageSize:string } ) => props.imageSize});
  height: var(--${( props: { imageSize:string } ) => props.imageSize});
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
