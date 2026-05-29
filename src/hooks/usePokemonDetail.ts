import { useQuery } from '@tanstack/react-query';

import { fetchPokemonDetail } from '../api/pokemonDetails';

export function usePokemonDetail(pokeApiId: string | undefined) {
    return useQuery({
        queryKey: ['pokemon-detail', pokeApiId],
        queryFn: () => fetchPokemonDetail(pokeApiId ?? ''),
        enabled: Boolean(pokeApiId),
    });
}