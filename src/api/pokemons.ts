import type { Pokemon} from "../types/pokemon.types.ts";

export async function fetchPokemon(): Promise<Pokemon[]> {
    //await new Promise((resolve) => setTimeout(resolve, 1500));
    const response = await fetch('/pokemon.json');


    if (!response.ok) {
        throw new Error('Pokémon failed to load.');
    }
    const text = await response.text();

    try {
        return JSON.parse(text) as Pokemon[];
    } catch {
        throw new Error("Pokémon data are invalid.");
    }
}