import { cssVar, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  border-radius: 0.5rem;
  background: var(--blue);
  color: var(--white);
  transition: background 0.2s ease;

  span {
    margin: 0 0.5rem;
  }

  &:hover {
    background: ${lighten(0.2, String(cssVar('--blue', '#2f46cf')))};
  }
`;
