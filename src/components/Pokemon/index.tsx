import React from 'react';
import { use3dEffect } from 'use-3d-effect';
import { usePokemon } from '../../hooks/usePokemon';
import { IPokemonData } from '../../types/pokemon';
import { formatId } from '../../utils/formatters';
import { Container, TypeText } from './styles';

interface Props {
  name: string;
  url: string;
  openModal: (pokemonData: IPokemonData) => void;
}

export const Pokemon = ({
  name,
  url,
  openModal,
}: Props): React.ReactElement => {
  const { cardRef, data, mainType } = usePokemon({ url });

  const { style, ...mouseHandlers } = use3dEffect(cardRef);

  const handlePokemonClick = () => {
    openModal(data);
  };

  return (
    <Container
      ref={cardRef}
      type={mainType.type.name as 'bug'}
      style={{ ...style }}
      {...mouseHandlers}
      onClick={handlePokemonClick}
    >
      <strong>{formatId(data.id)}</strong>
      <header>
        <img
          loading="lazy"
          src={data?.sprites?.other?.['official-artwork']?.front_default}
          alt={name}
        />
      </header>

      <section>
        <strong>{data.name}</strong>

        <div>
          {data.types?.map(({ type }) => (
            <TypeText key={type.name} type={type.name as 'bug'}>
              {type.name.toUpperCase()}
            </TypeText>
          ))}
        </div>
      </section>
    </Container>
  );
};
