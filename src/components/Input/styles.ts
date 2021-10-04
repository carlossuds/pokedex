import styled from 'styled-components';

interface Props {
  isFocused: boolean;
}

export const Container = styled.input<Props>`
  width: 100%;

  height: 100%;

  border: ${({ isFocused }) =>
    isFocused ? '2.5px solid var(--blue)' : `2px solid var(--gray)`};
  border-radius: 1rem;

  padding: 0.5rem;
  margin-bottom: 1rem;

  font-size: 1rem;
  font-weight: 500;

  ::placeholder {
    font-weight: 400;
  }
`;
