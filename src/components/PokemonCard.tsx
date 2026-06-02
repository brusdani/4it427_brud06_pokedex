import styles from './PokemonCard.module.css';
import { Link } from 'react-router-dom';
import { isPokemonLevelValid } from '../utils/pokemonUtils';

interface PokemonCardProps {
    id: string;
    name: string;
    type: string;
    rarity: string;
    level: number;
    favourite: boolean;
    caught: boolean;
    imageUrl?: string;
    pokeApiId?: number;
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
                                imageUrl,
                                pokeApiId,
                                onToggleCaught,
                                onToggleFavourite,
                                onRemove,
                            }: PokemonCardProps) {
    const isLevelValid = isPokemonLevelValid(level)

    return (
        <article className={`${styles.card} ${caught ? styles.caughtCard : ''}`}>
            <div className={styles.imageWrapper}>
                {imageUrl ? (
                    <img
                        className={styles.image}
                        src={imageUrl}
                        alt={name}
                    />
                ) : (
                    <div className={styles.imageFallback}>?</div>
                )}
            </div>

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
                    <span className={styles.invalidLevel}>Invalid level</span>
                )}
            </p>

            <div className={styles.badges}>
                {caught && <p className={styles.caughtBadge}>✓ Caught</p>}
                {favourite && <p className={styles.favouriteBadge}>★ Favourite</p>}
            </div>

            <div className={styles.detailArea}>
                {pokeApiId && (
                    <Link
                        to={`/pokemon/${pokeApiId}`}
                        className={styles.detailLink}
                    >
                        🔍 View detail
                    </Link>
                )}
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