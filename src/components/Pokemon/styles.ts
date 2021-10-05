import { lighten } from 'polished';
import { animated } from 'react-spring';
import styled from 'styled-components';
import { typeColors } from '../../styles/typeColors';

interface TypeProps<T> {
  type: T;
}

export const Container = styled(animated.div)<TypeProps<'bug'>>`
  background: ${({ type }) =>
    `radial-gradient(ellipse at top, 
      ${lighten(0.2, typeColors[type])} 35%, 
      ${typeColors[type]})`};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 15rem;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  padding: 1rem;
  cursor: pointer;

  * {
    transform-style: preserve-3d;
    transform: translateZ(1rem);
  }

  header img {
    width: 6rem;
    height: 6rem;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  }

  strong {
    text-transform: capitalize;
    color: var(--white);
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 1));
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
    width: 100%;

    div {
      display: flex;
      gap: 0.5rem;
    }
  }
`;

export const TypeText = styled.span<TypeProps<'bug'>>`
  background-color: ${({ type }) => typeColors[type]};
  color: var(--white);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.7rem;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 2px black;
  text-transform: uppercase;
`;
