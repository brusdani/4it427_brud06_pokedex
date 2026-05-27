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