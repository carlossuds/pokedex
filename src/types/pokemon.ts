export interface IPokemonData {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites?: {
    other?: {
      'official-artwork'?: {
        front_default?: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
