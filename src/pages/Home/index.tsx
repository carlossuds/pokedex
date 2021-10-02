import React, { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Modal from 'react-modal';
import logo from '../../assets/pokemon-logo.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Pokemon } from '../../components/Pokemon';
import { useHome } from '../../hooks/useHome';
import { Container, Content } from './styles';

export const Home = (): React.ReactElement => {
  const { formRef, pokemonList, isEndOfList, setOffset, offset, handleSearch } =
    useHome();

  const [isOpen, setIsOpen] = useState(false);

  const prevNextButtons = () => (
    <div className="buttonsContainer">
      <Button onClick={() => setOffset(prev => prev - 20)} disabled={!offset}>
        <AiFillCaretLeft />
        Previous
      </Button>
      <Button
        onClick={() => setOffset(prev => prev + 20)}
        disabled={isEndOfList}
      >
        Next
        <AiFillCaretRight />
      </Button>
    </div>
  );

  const renderPokemonModal = () => (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={{ overlay: { background: 'rgba(0, 0, 0, 0.75)' } }}
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
            <Input type="text" placeholder="> Search for a Pokémon" />
            <Button type="submit">Search</Button>
          </form>

          {prevNextButtons()}

          <ul>
            {pokemonList.map(({ name, url }) => (
              <Pokemon
                key={name}
                name={name}
                url={url}
                openModal={() => setIsOpen(true)}
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
