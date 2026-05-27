import { PokemonCard } from './components/PokemonCard';
import type { Pokemon } from './types/pokemon.types';

const mockPokemon: Pokemon[] = [
    {
        id: '1',
        name: 'Pikachu',
        type: 'Electric',
        rarity: 'Common',
        level: 25,
        favourite: true,
        caught: true,
    },
    {
        id: '2',
        name: 'Charmander',
        type: 'Fire',
        rarity: 'Rare',
        level: 18,
        favourite: false,
        caught: false,
    },
    {
        id: '3',
        name: 'Bulbasaur',
        type: 'Grass',
        rarity: 'Common',
        level: 12,
        favourite: false,
        caught: true,
    },
];

function App() {
    const handleToggleCaught = (id: string) => {
        console.log('toggle caught', id);
    };

    const handleToggleFavorite = (id: string) => {
        console.log('toggle favorite', id);
    };

    const handleRemove = (id: string) => {
        console.log('remove pokemon', id);
    };

    return (
        <main>
            <h1>Pokédex</h1>

            {mockPokemon.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.type}
                    rarity={pokemon.rarity}
                    level={pokemon.level}
                    favorite={pokemon.favourite}
                    caught={pokemon.caught}
                    onToggleCaught={handleToggleCaught}
                    onToggleFavorite={handleToggleFavorite}
                    onRemove={handleRemove}
                />
            ))}
        </main>
    );
}

export default App;