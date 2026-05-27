import { describe, expect, it } from 'vitest';

import type { Pokemon } from '../types/pokemon.types';
import {
    countCaughtPokemon,
    countFavouritePokemon,
    isPokemonLevelValid,
} from './pokemonUtils';

const pokemon: Pokemon[] = [
    {
        id: '1',
        name: 'Pikachu',
        type: 'Electric',
        rarity: 'Common',
        level: 25,
        favourite: true,
        caught: true,
    },
    {
        id: '2',
        name: 'Charmander',
        type: 'Fire',
        rarity: 'Rare',
        level: 18,
        favourite: false,
        caught: false,
    },
    {
        id: '3',
        name: 'Bulbasaur',
        type: 'Grass',
        rarity: 'Common',
        level: 12,
        favourite: true,
        caught: true,
    },
];

describe('isPokemonLevelValid', () => {
    it('returns true for valid Pokémon levels', () => {
        expect(isPokemonLevelValid(1)).toBe(true);
        expect(isPokemonLevelValid(50)).toBe(true);
        expect(isPokemonLevelValid(100)).toBe(true);
    });

    it('returns false for invalid Pokémon levels', () => {
        expect(isPokemonLevelValid(0)).toBe(false);
        expect(isPokemonLevelValid(101)).toBe(false);
        expect(isPokemonLevelValid(-5)).toBe(false);
    });
});

describe('countCaughtPokemon', () => {
    it('counts caught Pokémon correctly', () => {
        const result = countCaughtPokemon(pokemon);

        expect(result).toBe(2);
    });

    it('returns 0 for an empty array', () => {
        const result = countCaughtPokemon([]);

        expect(result).toBe(0);
    });
});

describe('countFavouritePokemon', () => {
    it('counts favourite Pokémon correctly', () => {
        const result = countFavouritePokemon(pokemon);

        expect(result).toBe(2);
    });

    it('returns 0 for an empty array', () => {
        const result = countFavouritePokemon([]);

        expect(result).toBe(0);
    });
});