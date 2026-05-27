import type { Pokemon} from "../types/pokemon.types.ts";

export async function fetchPokemon(): Promise<Pokemon[]> {
    const response = await fetch('/pokemon.json');

    if (!response.ok) {
        throw new Error('Pokémon failed to load.');
    }

    return response.json();
}