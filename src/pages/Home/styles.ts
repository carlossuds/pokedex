import { cssVar, darken, lighten } from 'polished';
import styled from 'styled-components';
import background from '../../assets/pokemon-bg.jpg';
import { typeColors } from '../../styles/typeColors';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  &::before {
    content: '';
    position: fixed;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    background-image: url(${background});
    opacity: 0.15;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;

  main {
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    gap: 1rem;
    width: 100%;
    max-width: 51rem;
    height: 100%;

    > img {
      width: 50%;
      margin: 0 auto;
      filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.7));
    }

    > div {
      display: flex;
      align-items: center;

      label {
        text-transform: capitalize;
        font-weight: 500;
        margin-left: 0.25rem;
      }
    }

    .buttonsContainer {
      display: flex;
      flex: 1;
      justify-content: space-between;
    }

    form {
      display: flex;
      margin: 0 auto;
      margin-bottom: 2rem;
      height: 3rem;
      width: 100%;
      justify-content: center;
      gap: 1rem;
    }

    ul {
      display: flex;
      justify-content: center;

      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;
    }
  }
`;

interface TypeProps<T> {
  type: T;
}

export const ModalContent = styled.div<TypeProps<'bug'>>`
  //background: ${({ type }) => lighten(0.2, typeColors[type])};
  background: var(--white);
  color: var(--black);
  //text-shadow: 1px 1px 2px black;

  border-radius: 2rem;
  padding: 2rem;

  height: 35rem;
  width: 35rem;
  max-width: calc(100% - 2rem);

  overflow-y: scroll;

  header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    h1 {
      text-transform: capitalize;
      font-weight: 500;
    }

    div > div {
      display: flex;
      margin-top: 0.5rem;
      gap: 0.5rem;
    }
  }

  section {
    display: flex;
    align-items: flex-start;
    margin-top: 3rem;

    img {
      width: 50%;
      filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.7));
    }

    > div {
      display: grid;
      grid-gap: 0.25rem;

      > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        font-weight: 400;

        > span {
          text-align: right;

          &:nth-child(1) {
            font-weight: 500;
            text-transform: capitalize;
          }

          + span {
            text-align: left;
            width: 6rem;
          }
        }

        div {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
        }
      }
    }
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 2rem;
    gap: 1.5rem;
    justify-content: center;

    button {
      background: var(--white);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-transform: capitalize;

      padding: 1rem 2rem;

      border-radius: 1rem;

      transition: background 0.2s ease-in-out;

      &:hover {
        background: ${darken(0.1, String(cssVar('--white', '#fff')))};
      }

      img {
        width: 4rem;
      }
    }
  }
`;

interface StatBarProps {
  value: number;
}

export const StatBar = styled.hr<StatBarProps>`
  border-radius: 0.5rem;
  border: 0;
  height: 0.25rem;

  width: ${({ value }) => `${value}%`};

  background-color: ${({ value }) => {
    if (value < 30) return 'var(--red)';

    if (value < 50) return 'var(--yellow)';

    return 'var(--green)';
  }};
`;
