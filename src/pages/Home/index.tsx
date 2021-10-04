import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import Modal from 'styled-react-modal';
import logo from '../../assets/pokemon-logo.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Pokemon } from '../../components/Pokemon';
import { useHome } from '../../hooks/useHome';
import { Container, Content } from './styles';

export const Home = (): React.ReactElement => {
  const {
    formRef,
    pokemonList,
    isEndOfList,
    setOffset,
    offset,
    handleSearch,
    isModalOpen,
    setIsModalOpen,
  } = useHome();

  const prevNextButtons = () => (
    <div className="buttonsContainer">
      <Button
        onClick={() => setOffset(prev => prev - 20)}
        disabled={!offset}
        leftIcon={AiFillCaretLeft}
      >
        Previous
      </Button>
      <Button
        onClick={() => setOffset(prev => prev + 20)}
        disabled={isEndOfList}
        rightIcon={AiFillCaretRight}
      >
        Next
      </Button>
    </div>
  );

  const renderPokemonModal = () => (
    <Modal
      isOpen={isModalOpen}
      onBackgroundClick={() => setIsModalOpen(false)}
      onEscapeKeydown={() => setIsModalOpen(false)}
    >
      <h1>SHALOM</h1>
    </Modal>
  );

  return (
    <Container>
      <Content>
        <main>
          <img src={logo} alt="Pokemon logo" />

          <form ref={formRef} onSubmit={handleSearch}>
            <Input
              type="text"
              placeholder="> Search Pokémon by name or number"
            />
            <Button type="submit" rightIcon={FaSearch}>
              Search
            </Button>
          </form>

          {prevNextButtons()}

          <ul>
            {pokemonList.map(({ name, url }) => (
              <Pokemon
                key={name}
                name={name}
                url={url}
                openModal={() => setIsModalOpen(true)}
              />
            ))}
          </ul>

          {prevNextButtons()}
        </main>

        {renderPokemonModal()}
      </Content>
    </Container>
  );
};
