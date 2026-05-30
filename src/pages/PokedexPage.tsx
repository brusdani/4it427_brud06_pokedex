import { PokemonCard } from '../components/PokemonCard';
import { usePokemon } from '../context/PokemonContext';
import { useState } from 'react';
import { filterPokemonByName } from "../utils/pokemonUtils.ts";
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

    const [searchTerm, setSearchTerm] = useState('');

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
    const filteredPokemon = filterPokemonByName(pokemon, searchTerm);

    return (
        <main className={styles.page}>
            <section className={styles.searchBox}>
                <label className={styles.searchLabel}>
                    Search Pokémon
                    <input
                        className={styles.searchInput}
                        type="search"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Search by name..."
                    />
                </label>
            </section>
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

            {filteredPokemon.length === 0 ? (
                <p className={styles.emptyState}>
                    No Pokémon match your search.
                </p>
            ) : (
                <section className={styles.grid}>
                    {filteredPokemon.map((pokemon) => (
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