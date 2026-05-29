export type PokemonDetailStat = {
    name: string;
    value: number;
};

export type PokemonDetail = {
    id: number;
    name: string;
    height: number;
    weight: number;
    baseExperience: number;
    imageUrl: string | null;
    types: string[];
    abilities: string[];
    stats: PokemonDetailStat[];
};