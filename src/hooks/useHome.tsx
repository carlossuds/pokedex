import { useEffect, useMemo, useRef, useState } from 'react';
import { pokeApi } from '../services/pokeApi';
import { IPokemonData } from '../types/pokemon';

interface IPokemon {
  name: string;
  url: string;
}

interface IPokeApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export const useHome = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  const [modalData, setModalData] = useState<IPokemonData>({} as IPokemonData);

  useEffect(() => {
    const loadPokemonList = async () => {
      const { data } = await pokeApi.get<IPokeApiResponse>('/pokemon');

      setPokemonList(data.results);
    };

    loadPokemonList();
  }, []);

  useEffect(() => {
    const loadPokemonList = async () => {
      const { data } = await pokeApi.get<IPokeApiResponse>(
        `/pokemon?offset=${offset}&limit=${limit}`,
      );

      setPokemonList(data.results);
    };

    loadPokemonList();
  }, [offset, limit]);

  const isEndOfList = useMemo(() => offset + limit > 1118, [offset, limit]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = formRef.current?.getElementsByTagName('input')[0];

    const { data } = await pokeApi.get<IPokemonData>(
      `/pokemon/${input?.value}`,
    );

    if (data) setModalData(data);
  };

  return {
    formRef,
    pokemonList,
    isEndOfList,
    offset,
    setOffset,
    handleSearch,
  };
};
