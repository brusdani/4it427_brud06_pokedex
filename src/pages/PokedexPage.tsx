import { PokemonCard } from '../components/PokemonCard';
import { usePokemon } from '../context/PokemonContext';

export function PokedexPage() {
    const {
        pokemon,
        toggleCaught,
        toggleFavourite,
        markAllAsCaught,
        removePokemon,
    } = usePokemon();

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
                {pokemon.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        {...pokemon}
                        onToggleCaught={toggleCaught}
                        onToggleFavourite={toggleFavourite}
                        onRemove={removePokemon}
                    />
                ))}
            </main>
        </>
    );
}