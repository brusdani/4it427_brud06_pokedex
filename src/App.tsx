import { PokemonCard } from './components/PokemonCard';
import {usePokemon} from "./context/PokemonContext.tsx";


function App() {
    const {
        pokemon,
        toggleCaught,
        toggleFavourite,
        removePokemon,
        markAllAsCaught,
    } = usePokemon();

    return (
        <main>
            <h1>Pokédex</h1>
            <button type="button" onClick={markAllAsCaught}>
                Mark all pokemon as caught
            </button>

            {pokemon.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    {...pokemon}
                    onToggleCaught={toggleCaught}
                    onToggleFavorite={toggleFavourite}
                    onRemove={removePokemon}
                />
            ))}
        </main>
    );
}

export default App;