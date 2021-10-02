import styled from 'styled-components';
import background from '../../assets/pokemon-bg.jpg';

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
  padding: 3rem 0;

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

    .buttonsContainer {
      display: flex;
      flex: 1;
      justify-content: space-between;
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
