import { describe, expect, it } from 'vitest';

import type { Pokemon } from '../types/pokemon.types';
import {
    countCaughtPokemon,
    countFavouritePokemon,
    isPokemonLevelValid,
    filterPokemonByName
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
describe('filterPokemonByName', () => {
    it('returns Pokémon whose name contains the searched text', () => {
        const result = filterPokemonByName(pokemon, 'char');

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Charmander');
    });

    it('ignores letter case and spaces at the beginning or end', () => {
        const result = filterPokemonByName(pokemon, '  PIKA  ');

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Pikachu');
    });

    it('returns all Pokémon when the search term is empty', () => {
        const result = filterPokemonByName(pokemon, '');

        expect(result).toEqual(pokemon);
    });

    it('can return multiple matching Pokémon', () => {
        const pokemonWithSimilarNames = [
            ...pokemon,
            {
                id: '4',
                name: 'Regirock',
                type: 'Rock',
                rarity: 'Legendary',
                level: 50,
                favourite: false,
                caught: false,
            },
            {
                id: '5',
                name: 'Regice',
                type: 'Ice',
                rarity: 'Legendary',
                level: 50,
                favourite: false,
                caught: false,
            },
        ];

        const result = filterPokemonByName(pokemonWithSimilarNames, 'regi');

        expect(result).toHaveLength(2);
        expect(result.map((singlePokemon) => singlePokemon.name)).toEqual([
            'Regirock',
            'Regice',
        ]);
    });

    it('returns an empty array when no Pokémon match the search term', () => {
        const result = filterPokemonByName(pokemon, 'mew');

        expect(result).toEqual([]);
    });
});