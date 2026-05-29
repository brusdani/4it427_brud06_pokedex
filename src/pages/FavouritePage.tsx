import { PokemonCard } from '../components/PokemonCard';
import { usePokemon } from '../context/PokemonContext';
import styles from '../App.module.css';

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
            <main className={styles.page}>
                <p className={styles.loadingBox}>Loading favourite Pokémon...</p>
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

    const favouritePokemon = pokemon.filter(
        (singlePokemon) => singlePokemon.favourite
    );

    return (
        <main className={styles.page}>
            <section className={styles.pageHeader}>
                <p className={styles.counter}>
                    {favouritePokemon.length} favourite Pokémon
                </p>
            </section>

            {favouritePokemon.length === 0 ? (
                <p className={styles.emptyState}>
                    You do not have any favourite Pokémon yet.
                </p>
            ) : (
                <section className={styles.grid}>
                    {favouritePokemon.map((singlePokemon) => (
                        <PokemonCard
                            key={singlePokemon.id}
                            {...singlePokemon}
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