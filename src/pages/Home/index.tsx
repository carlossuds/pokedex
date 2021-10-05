import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import Modal from 'styled-react-modal';
import logo from '../../assets/pokemon-logo.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Pokemon } from '../../components/Pokemon';
import { TypeText } from '../../components/Pokemon/styles';
import { useHome } from '../../hooks/useHome';
import { IPokemonData } from '../../types/pokemon';
import { formatHeight, formatId, formatWeight } from '../../utils/formatters';
import { Container, Content, ModalContent, StatBar } from './styles';

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
    modalData,
    setModalData,
    evolutions,
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
      <ModalContent
        type={(modalData.types ? modalData.types[0].type.name : 'bug') as 'bug'}
      >
        <header>
          <div>
            <h1>{modalData.name}</h1>

            <div>
              {modalData.types?.map(({ type }) => (
                <TypeText key={type.name} type={type.name as 'bug'}>
                  {type.name}
                </TypeText>
              ))}
            </div>
          </div>

          <strong>{formatId(modalData.id)}</strong>
        </header>

        <section>
          <img
            loading="lazy"
            src={modalData?.sprites?.other?.['official-artwork']?.front_default}
            alt={modalData.name}
          />

          <div>
            <div>
              <span>Height</span>
              <span>{formatHeight(modalData.height)}</span>
            </div>
            <div>
              <span>Weight</span>
              <span>{formatWeight(modalData.weight)}</span>
            </div>

            {modalData.stats?.map(({ stat, base_stat }) => (
              <div key={stat.name}>
                <span>{stat.name}</span>
                <div>
                  <span>{base_stat}</span>
                  <StatBar value={base_stat} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer>
          {evolutions.map(({ id, name, sprites, ...rest }) => (
            <button
              type="button"
              onClick={() => setModalData({ id, name, sprites, ...rest })}
            >
              <span>{formatId(id)}</span>
              <img
                src={sprites?.other?.['official-artwork']?.front_default}
                alt={name}
              />
              <span>{name}</span>
            </button>
          ))}
        </footer>
      </ModalContent>
    </Modal>
  );

  const handleOpenModal = (pokemonData: IPokemonData) => {
    setModalData(pokemonData);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <Content>
        <main>
          <img src={logo} alt="Pokemon logo" />

          <form ref={formRef} onSubmit={handleSearch}>
            <Input type="text" placeholder="Search by name or number" />
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
                openModal={handleOpenModal}
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
