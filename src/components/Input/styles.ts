import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  max-width: 20rem;

  height: 100%;

  border: 2px solid var(--gray);
  border-radius: 4px;

  padding: 0.5rem;
  margin-bottom: 1rem;

  font-size: 1rem;
  font-weight: 500;

  ::placeholder {
    font-weight: 400;
  }
`;
