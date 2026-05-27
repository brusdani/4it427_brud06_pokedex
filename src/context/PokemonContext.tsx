import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Pokemon } from '../types/pokemon.types';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemon } from '../api/pokemons';

interface PokemonContextType {
    pokemon: Pokemon[];
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    refetch: () => void;
    addPokemon: (pokemonData: Omit<Pokemon, 'id' | 'favourite' | 'caught'>) => void;
    removePokemon: (id: string) => void;
    toggleCaught: (id: string) => void;
    toggleFavourite: (id: string) => void;
    markAllAsCaught: () => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

interface PokemonProviderProps {
    children: ReactNode;
}


export function PokemonProvider({ children }: PokemonProviderProps) {
    const {
        data: serverPokemon = [],
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["pokemon"],
        queryFn: fetchPokemon,
    });

    const [clientPokemon, setClientPokemon] = useState<Pokemon[]>([]);

    useEffect(() => {
        if (serverPokemon.length > 0 && clientPokemon.length === 0) {
            setClientPokemon(serverPokemon);
        }
    }, [serverPokemon, clientPokemon.length]);

    const addPokemon = (
        pokemonData: Omit<Pokemon, 'id' | 'favourite' | 'caught'>
    ) => {
        const newPokemon: Pokemon = {
            id: crypto.randomUUID(),
            ...pokemonData,
            favourite: false,
            caught: false,
        };

        setClientPokemon((prev) => [...prev, newPokemon]);
    };

    const removePokemon = (id: string) => {
        setClientPokemon((prev) => prev.filter((pokemon) => pokemon.id !== id));
    };

    const toggleCaught = (id: string) => {
        setClientPokemon((prev) =>
            prev.map((pokemon) =>
                pokemon.id === id
                    ? { ...pokemon, caught: !pokemon.caught }
                    : pokemon
            )
        );
    };

    const toggleFavourite = (id: string) => {
        setClientPokemon((prev) =>
            prev.map((pokemon) =>
                pokemon.id === id
                    ? { ...pokemon, favourite: !pokemon.favourite }
                    : pokemon
            )
        );
    };

    const markAllAsCaught = () => {
        setClientPokemon((prev) =>
            prev.map((pokemon) => ({
                ...pokemon,
                caught: true,
            }))
        );
    };

    useEffect(() => {
        const caughtCount = clientPokemon.filter((singlePokemon) => singlePokemon.caught).length;
        const totalCount = clientPokemon.length;

        document.title = `Pokédex (${caughtCount} / ${totalCount} caught)`;
    }, [clientPokemon]);


    const value = useMemo(
        () => ({
            pokemon: clientPokemon,
            isLoading,
            isError,
            error,
            refetch,
            addPokemon,
            removePokemon,
            toggleCaught,
            toggleFavourite,
            markAllAsCaught,
        }),
        [clientPokemon, isLoading, isError, error, refetch ],
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