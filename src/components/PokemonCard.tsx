interface PokemonCardProps {
    id: string;
    name: string;
    type: string;
    rarity: string;
    level: number;
    favorite: boolean;
    caught: boolean;
    onToggleCaught: (id: string) => void;
    onToggleFavorite: (id: string) => void;
    onRemove: (id: string) => void;
}

export function PokemonCard({
                                id,
                                name,
                                type,
                                rarity,
                                level,
                                favorite,
                                caught,
                                onToggleCaught,
                                onToggleFavorite,
                                onRemove,
                            }: PokemonCardProps) {
    const isLevelValid = level >= 1 && level <= 100;

    return (
        <article>
            <h2>{name}</h2>
            <p>
                <strong>Type:</strong> {type}
            </p>
            <p>
                <strong>Rarity:</strong> {rarity}
            </p>
            <p>
                <strong>Level:</strong>{' '}
                {isLevelValid ? level : <span>Neplatný level</span>}
            </p>
            {caught && <p>✓ Caught</p>}
            {favorite && <p>★ Favourite</p>}
            <div>
                <button type="button" onClick={() => onToggleCaught(id)}>
                    Change caught state
                </button>

                <button type="button" onClick={() => onToggleFavorite(id)}>
                    {favorite ? 'Remove from favourites' : 'Add to favourites'}
                </button>

                <button type="button" onClick={() => onRemove(id)}>
                    Remove
                </button>
            </div>
        </article>
    );
}