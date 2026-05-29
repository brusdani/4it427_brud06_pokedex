import type { PokemonDetail as PokemonDetailType } from '../types/pokemonDetail.types';
import { getPokemonTypeClass } from '../utils/pokemonTypeStyles';
import styles from './PokemonDetail.module.css';

interface PokemonDetailProps {
    pokemonDetail: PokemonDetailType;
}

const displayedStatNames = ['hp', 'attack', 'defense', 'speed'];

function formatStatName(statName: string): string {
    if (statName === 'hp') {
        return 'HP';
    }

    return statName.charAt(0).toUpperCase() + statName.slice(1);
}

export function PokemonDetail({ pokemonDetail }: PokemonDetailProps) {
    const displayedStats = pokemonDetail.stats.filter((stat) =>
        displayedStatNames.includes(stat.name)
    );

    return (
        <section className={styles.detailCard}>
            <div className={styles.detailHeader}>
                <div className={styles.imagePanel}>
                    {pokemonDetail.imageUrl && (
                        <img
                            className={styles.detailImage}
                            src={pokemonDetail.imageUrl}
                            alt={pokemonDetail.name}
                        />
                    )}
                </div>

                <div>
                    <h1 className={styles.detailTitle}>
                        {pokemonDetail.name}
                    </h1>

                    <div className={styles.infoGrid}>
                        <p className={styles.infoItem}>
                            <span className={styles.infoLabel}>Height</span>
                            <span className={styles.infoValue}>
                                {pokemonDetail.height}
                            </span>
                        </p>

                        <p className={styles.infoItem}>
                            <span className={styles.infoLabel}>Weight</span>
                            <span className={styles.infoValue}>
                                {pokemonDetail.weight}
                            </span>
                        </p>

                        <p className={styles.infoItem}>
                            <span className={styles.infoLabel}>
                                Base experience
                            </span>
                            <span className={styles.infoValue}>
                                {pokemonDetail.baseExperience}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <section className={styles.detailSection}>
                <h2 className={styles.sectionTitle}>Types</h2>

                <ul className={styles.pillList}>
                    {pokemonDetail.types.map((type) => (
                        <li
                            key={type}
                            className={`${styles.pill} ${getPokemonTypeClass(type)}`}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.detailSection}>
                <h2 className={styles.sectionTitle}>Abilities</h2>

                <ul className={styles.pillList}>
                    {pokemonDetail.abilities.map((ability) => (
                        <li
                            key={ability}
                            className={`${styles.pill} ${styles.abilityPill}`}
                        >
                            {ability}
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.detailSection}>
                <h2 className={styles.sectionTitle}>Stats</h2>

                <ul className={styles.statsList}>
                    {displayedStats.map((stat) => (
                        <li key={stat.name} className={styles.statItem}>
                            <span className={styles.statName}>
                                {formatStatName(stat.name)}
                            </span>
                            <span className={styles.statValue}>
                                {stat.value}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}