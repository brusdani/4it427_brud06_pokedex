import type { Pokemon } from '../types/pokemon.types';

export function isPokemonLevelValid(level: number): boolean {
    return level >= 1 && level <= 100;
}

export function countCaughtPokemon(pokemon: Pokemon[]): number {
    return pokemon.filter((singlePokemon) => singlePokemon.caught).length;
}

export function countFavouritePokemon(pokemon: Pokemon[]): number {
    return pokemon.filter((singlePokemon) => singlePokemon.favourite).length;
}
export function filterPokemonByName(
    pokemon: Pokemon[],
    searchTerm: string
): Pokemon[] {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    if (!normalizedSearchTerm) {
        return pokemon;
    }

    return pokemon.filter((pokemonItem) => {
        const normalizedName = pokemonItem.name.toLowerCase();

        return normalizedName.includes(normalizedSearchTerm);
    });
}