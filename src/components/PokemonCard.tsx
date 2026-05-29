import styles from './PokemonCard.module.css';

interface PokemonCardProps {
    id: string;
    name: string;
    type: string;
    rarity: string;
    level: number;
    favourite: boolean;
    caught: boolean;
    onToggleCaught: (id: string) => void;
    onToggleFavourite: (id: string) => void;
    onRemove: (id: string) => void;
}

export function PokemonCard({
                                id,
                                name,
                                type,
                                rarity,
                                level,
                                favourite,
                                caught,
                                onToggleCaught,
                                onToggleFavourite,
                                onRemove,
                            }: PokemonCardProps) {
    const isLevelValid = level >= 1 && level <= 100;

    return (
        <article className={`${styles.card} ${caught ? styles.caughtCard : ''}`}>
            <h2 className={styles.title}>{name}</h2>

            <p className={styles.info}>
                <strong>Type:</strong> {type}
            </p>

            <p className={styles.info}>
                <strong>Rarity:</strong> {rarity}
            </p>

            <p className={styles.info}>
                <strong>Level:</strong>{' '}
                {isLevelValid ? (
                    level
                ) : (
                    <span className={styles.invalidLevel}>Neplatný level</span>
                )}
            </p>

            <div className={styles.badges}>
                {caught && <p className={styles.caughtBadge}>✓ Caught</p>}
                {favourite && <p className={styles.favouriteBadge}>★ Favourite</p>}
            </div>

            <div className={styles.actions}>
                <button
                    type="button"
                    className={styles.button}
                    onClick={() => onToggleCaught(id)}
                >
                    Change caught state
                </button>

                <button
                    type="button"
                    className={styles.button}
                    onClick={() => onToggleFavourite(id)}
                >
                    {favourite ? 'Remove from favourites' : 'Add to favourites'}
                </button>

                <button
                    type="button"
                    className={styles.dangerButton}
                    onClick={() => onRemove(id)}
                >
                    Remove
                </button>
            </div>
        </article>
    );
}