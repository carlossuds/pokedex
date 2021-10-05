import { useEffect, useMemo, useRef, useState } from 'react';
import { pokeApi } from '../services/pokeApi';
import { IPokemonData } from '../types/pokemon';
import { getEndpoint } from '../utils/getEndpoint';

interface Props {
  url: string;
}

export const usePokemon = ({ url }: Props) => {
  const cardRef = useRef(null);
  const [data, setData] = useState({} as IPokemonData);

  useEffect(() => {
    const loadPokemon = async () => {
      const response = await pokeApi.get<IPokemonData>(getEndpoint(url));

      setData(response.data);
    };

    loadPokemon();
  }, [url]);

  const mainType = useMemo(() => {
    if (data.types?.length) return data.types[0];

    return {
      type: {
        name: 'normal',
      },
    };
  }, [data.types]);

  return {
    cardRef,
    data,
    mainType,
  };
};
