import { PokemonCard } from '../components/PokemonCard';
import { usePokemon } from '../context/PokemonContext';
import styles from '../App.module.css';

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
            <main className={styles.page}>
                <p className={styles.loadingBox}>Loading Pokémon...</p>
            </main>
        );
    }

    if (isError) {
        return (
            <main className={styles.page}>
                <section className={styles.errorBox}>
                    <h1>Failed to load Pokémon</h1>
                    <p>{error?.message}</p>
                    <button
                        type="button"
                        className={styles.primaryButton}
                        onClick={() => refetch()}
                    >
                        Try again
                    </button>
                </section>
            </main>
        );
    }

    const caughtCount = pokemon.filter((pokemon) => pokemon.caught).length;
    const totalCount = pokemon.length;

    return (
        <main className={styles.page}>
            <section className={styles.pageHeader}>
                <p className={styles.counter}>
                    {caughtCount} / {totalCount} caught
                </p>

                <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={markAllAsCaught}
                >
                    Mark all as caught
                </button>
            </section>

            {pokemon.length === 0 ? (
                <p className={styles.emptyState}>
                    No Pokémon in your Pokédex yet.
                </p>
            ) : (
                <section className={styles.grid}>
                    {pokemon.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            {...pokemon}
                            onToggleCaught={toggleCaught}
                            onToggleFavourite={toggleFavourite}
                            onRemove={removePokemon}
                        />
                    ))}
                </section>
            )}
        </main>
    );
}