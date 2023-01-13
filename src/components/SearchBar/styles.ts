import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 140px;
  margin-bottom: 75px;
`;

export const Label = styled.label`
  font-size: var(--font-medium);
  color: var(--tertiary);
`;

export const Input = styled.input`
  font-size: var(--font-x-large);
  line-height: var(--font-x-large);
  color: var(--secondary);
  height: 80px;
  font-weight: bold;
  padding-bottom: 14px;
  border: 0;
  border-bottom: 2px solid var(--secondary);
  background-color: transparent;
  color: #fff;
  outline: 0;
  padding-left: 10px;
`;
