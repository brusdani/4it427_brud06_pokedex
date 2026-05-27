import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Pokemon } from '../types/pokemon.types';

interface PokemonContextType {
    pokemon: Pokemon[];
    addPokemon: (pokemonData: Omit<Pokemon, 'id' | 'favorite' | 'caught'>) => void;
    removePokemon: (id: string) => void;
    toggleCaught: (id: string) => void;
    toggleFavourite: (id: string) => void;
    markAllAsCaught: () => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

interface PokemonProviderProps {
    children: ReactNode;
}

const initialPokemon: Pokemon[] = [
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
        favourite: false,
        caught: true,
    },
];

export function PokemonProvider({ children }: PokemonProviderProps) {
    const [pokemon, setPokemon] = useState<Pokemon[]>(initialPokemon);

    const addPokemon = (
        pokemonData: Omit<Pokemon, 'id' | 'favorite' | 'caught'>
    ) => {
        const newPokemon: Pokemon = {
            id: Date.now().toString(),
            ...pokemonData,
            favourite: false,
            caught: false,
        };

        setPokemon((prev) => [...prev, newPokemon]);
    };

    const removePokemon = (id: string) => {
        setPokemon((prev) => prev.filter((pokemon) => pokemon.id !== id));
    };

    const toggleCaught = (id: string) => {
        setPokemon((prev) =>
            prev.map((pokemon) =>
                pokemon.id === id
                    ? { ...pokemon, caught: !pokemon.caught }
                    : pokemon
            )
        );
    };

    const toggleFavourite = (id: string) => {
        setPokemon((prev) =>
            prev.map((pokemon) =>
                pokemon.id === id
                    ? { ...pokemon, favorite: !pokemon.favourite }
                    : pokemon
            )
        );
    };

    const markAllAsCaught = () => {
        setPokemon((prev) =>
            prev.map((pokemon) => ({
                ...pokemon,
                caught: true,
            }))
        );
    };

    useEffect(() => {
        const caughtCount = pokemon.filter((singlePokemon) => singlePokemon.caught).length;
        const totalCount = pokemon.length;

        document.title = `Pokédex (${caughtCount} / ${totalCount} caught)`;
    }, [pokemon]);

    const value = useMemo(
        () => ({
            pokemon,
            addPokemon,
            removePokemon,
            toggleCaught,
            toggleFavourite,
            markAllAsCaught,
        }),
        [pokemon]
    );

    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    );
}

export function usePokemon() {
    const context = useContext(PokemonContext);

    if (context === undefined) {
        throw new Error('usePokemon must be used within PokemonProvider');
    }

    return context;
}