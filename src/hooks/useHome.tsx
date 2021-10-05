import { useEffect, useMemo, useRef, useState } from 'react';
import { pokeApi } from '../services/pokeApi';
import { IPokemonData } from '../types/pokemon';
import { getEndpoint } from '../utils/getEndpoint';

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

interface SpeciesEvolution {
  species: {
    name: string;
    url: string;
  };
  evolves_to: SpeciesEvolution[];
}
interface IEvolutionsResponse {
  chain: SpeciesEvolution;
}

export const useHome = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  const [modalData, setModalData] = useState<IPokemonData>({} as IPokemonData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [evolutions, setEvolutions] = useState<IPokemonData[]>([]);

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

  useEffect(() => {
    setEvolutions([]);

    const loadEvolutions = async () => {
      const speciesResponse = await pokeApi.get<{
        evolution_chain: { url: string };
      }>(`pokemon-species/${modalData.id}`);

      const { evolution_chain } = speciesResponse.data;

      const { data } = await pokeApi.get<IEvolutionsResponse>(
        getEndpoint(evolution_chain.url),
      );

      const firstToEvolve = data.chain.species.name;
      const evolutionChain = data.chain.evolves_to;

      const fetchPokemonData = async (pokemonName: string) => {
        const response = await pokeApi.get<IPokemonData>(
          `pokemon/${pokemonName}`,
        );

        return response.data;
      };

      const firstOfEvChain = await fetchPokemonData(firstToEvolve);

      setEvolutions(prev => [...prev, firstOfEvChain]);

      const mapAndFetchInnerData = (pokemonEvolution: SpeciesEvolution[]) =>
        pokemonEvolution.forEach(async ({ species, evolves_to }) => {
          const fetched = await fetchPokemonData(species.name);

          if (evolves_to.length) {
            mapAndFetchInnerData(evolves_to);
          }

          setEvolutions(prev => [...prev, fetched]);
        });

      mapAndFetchInnerData(evolutionChain);
    };

    loadEvolutions();
  }, [modalData]);

  const isEndOfList = useMemo(() => offset + limit > 1118, [offset, limit]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = formRef.current?.getElementsByTagName('input')[0];

    const { data } = await pokeApi.get<IPokemonData>(
      `/pokemon/${input?.value.toLowerCase()}`,
    );

    if (data) {
      setModalData(data);
      setIsModalOpen(true);
    }
  };

  return {
    formRef,
    pokemonList,
    isEndOfList,
    offset,
    setOffset,
    handleSearch,
    isModalOpen,
    setIsModalOpen,
    modalData,
    setModalData,
    evolutions,
  };
};
