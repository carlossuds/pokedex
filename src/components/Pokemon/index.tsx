import React from 'react';
import { use3dEffect } from 'use-3d-effect';
import { usePokemon } from '../../hooks/usePokemon';
import { Container, TypeText } from './styles';

interface Props {
  name: string;
  url: string;
  openModal: () => void;
}

export const Pokemon = ({
  name,
  url,
  openModal,
}: Props): React.ReactElement => {
  const { cardRef, data, mainType, formattedId } = usePokemon({ url });

  const { style, ...mouseHandlers } = use3dEffect(cardRef);

  return (
    <Container
      ref={cardRef}
      type={mainType.type.name as 'bug'}
      style={{ ...style }}
      {...mouseHandlers}
      onClick={() => openModal()}
    >
      <strong>{formattedId(data.id)}</strong>
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
            <TypeText type={type.name as 'bug'}>
              {type.name.toUpperCase()}
            </TypeText>
          ))}
        </div>
      </section>
    </Container>
  );
};
