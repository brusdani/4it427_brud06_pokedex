import { Link, useParams } from 'react-router-dom';

import { PokemonDetail } from '../components/PokemonDetail';
import { usePokemonDetail } from '../hooks/usePokemonDetail';
import styles from '../App.module.css';

export function PokemonDetailPage() {
    const { pokeApiId } = useParams();

    const {
        data: pokemonDetail,
        isLoading,
        isError,
        error,
    } = usePokemonDetail(pokeApiId);

    if (isLoading) {
        return (
            <main className={styles.page}>
                <p className={styles.loadingBox}>Loading Pokémon detail...</p>
            </main>
        );
    }

    if (isError) {
        return (
            <main className={styles.page}>
                <section className={styles.errorBox}>
                    <h1>Failed to load Pokémon detail</h1>
                    <p>{error?.message}</p>

                    <Link to="/" className={styles.primaryLink}>
                        Back to Pokédex
                    </Link>
                </section>
            </main>
        );
    }

    if (!pokemonDetail) {
        return (
            <main className={styles.page}>
                <p className={styles.emptyState}>
                    Pokémon detail was not found.
                </p>
            </main>
        );
    }

    return (
        <main className={styles.page}>
            <Link to="/" className={styles.backLink}>
                ← Back to Pokédex
            </Link>

            <PokemonDetail pokemonDetail={pokemonDetail} />
        </main>
    );
}