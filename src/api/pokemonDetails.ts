import type { PokemonDetail } from '../types/pokemonDetail.types';
//Type returned from API
type PokeApiPokemonResponse = {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    sprites: {
        front_default: string | null;
        other?: {
            'official-artwork'?: {
                front_default: string | null;
            };
        };
    };
    types: {
        type: {
            name: string;
        };
    }[];
    abilities: {
        ability: {
            name: string;
        };
    }[];
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
};

export async function fetchPokemonDetail(
    idOrName: string
): Promise<PokemonDetail> {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${idOrName.toLowerCase()}`
    );

    if (!response.ok) {
        throw new Error('Pokémon detail failed to load.');
    }

    const data = (await response.json()) as PokeApiPokemonResponse;
    //Mapping to pokemonDetail type
    return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        baseExperience: data.base_experience,
        imageUrl:
            data.sprites.other?.['official-artwork']?.front_default ??
            data.sprites.front_default,
        types: data.types.map((item) => item.type.name),
        abilities: data.abilities.map((item) => item.ability.name),
        stats: data.stats.map((item) => ({
            name: item.stat.name,
            value: item.base_stat,
        })),
    };
}