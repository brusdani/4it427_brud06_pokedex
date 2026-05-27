import { PokemonCard } from './components/PokemonCard';
import {usePokemon} from "./context/PokemonContext.tsx";
import {AddPokemonForm} from "./components/AddPokemonForm.tsx";


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
            <AddPokemonForm>

            </AddPokemonForm>

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
    );
}

export default App;