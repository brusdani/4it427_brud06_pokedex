import { PokemonCard } from '../components/PokemonCard';
import { usePokemon } from '../context/PokemonContext';

export function FavouritesPage() {
    const {
        pokemon,
        isLoading,
        isError,
        error,
        refetch,
        toggleCaught,
        toggleFavourite,
        removePokemon,
    } = usePokemon();

    if (isLoading) {
        return (
            <main>
                <p>Loading favourite Pokémon...</p>
            </main>
        );
    }

    if (isError) {
        return (
            <main>
                <section>
                    <h1>Failed to load Pokémon</h1>
                    <p>{error?.message}</p>
                    <button type="button" onClick={() => refetch()}>
                        Try again
                    </button>
                </section>
            </main>
        );
    }

    const favouritePokemon = pokemon.filter(
        (singlePokemon) => singlePokemon.favourite
    );

    return (
        <main>
            <h1>Favourite Pokémon</h1>

            {favouritePokemon.length === 0 ? (
                <p>You do not have any favourite Pokémon yet.</p>
            ) : (
                favouritePokemon.map((singlePokemon) => (
                    <PokemonCard
                        key={singlePokemon.id}
                        {...singlePokemon}
                        onToggleCaught={toggleCaught}
                        onToggleFavourite={toggleFavourite}
                        onRemove={removePokemon}
                    />
                ))
            )}
        </main>
    );
}