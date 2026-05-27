import { PokemonCard } from '../components/PokemonCard';
import { usePokemon } from '../context/PokemonContext';

export function PokedexPage() {
    const {
        pokemon,
        isLoading,
        isError,
        error,
        refetch,
        toggleCaught,
        toggleFavourite,
        markAllAsCaught,
        removePokemon,
    } = usePokemon();

    if (isLoading) {
        return (
            <main>
                <p>Loading pokémon...</p>
            </main>
        );
    }
    if (isError) {
        return (
            <main>
                <section>
                    <h1>Failed to load pokémon</h1>
                    <p>{error?.message}</p>
                    <button onClick={() => refetch()}>
                        Try again
                    </button>
                </section>
            </main>
        );
    }

    const caughtCount = pokemon.filter((pokemon) => pokemon.caught).length;
    const totalCount = pokemon.length;

    return (
        <>
            <div>
                <p>
                    {caughtCount} / {totalCount} caught
                </p>

                <button type="button" onClick={markAllAsCaught}>
                    Mark all as caught
                </button>
            </div>

            <main>
                {pokemon.length === 0 ? (
                    <p>No Pokémon in your Pokédex yet.</p>
                ) : (
                    pokemon.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            {...pokemon}
                            onToggleCaught={toggleCaught}
                            onToggleFavourite={toggleFavourite}
                            onRemove={removePokemon}
                        />
                    ))
                )}
            </main>
        </>
    );
}