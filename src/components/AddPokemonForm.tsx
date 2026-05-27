import { useState } from 'react';
import { usePokemon } from '../context/PokemonContext';
import {useNavigate} from "react-router-dom";

export function AddPokemonForm() {
    const { addPokemon } = usePokemon();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [rarity, setRarity] = useState('');
    const [level, setLevel] = useState('');


    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) =>  {
        event.preventDefault();

        addPokemon({
            name,
            type,
            rarity,
            level: Number(level),
        });

        setName('');
        setType('');
        setRarity('');
        setLevel('');

        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Pokémon</h2>
            <div>
                <label>
                    <span>Name</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Type</span>
                    <input
                        type="text"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Rarity</span>
                    <input
                        type="text"
                        value={rarity}
                        onChange={(event) => setRarity(event.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Level</span>
                    <input
                        type="number"
                        value={level}
                        onChange={(event) => setLevel(event.target.value)}
                        min="1"
                        max="100"
                        required
                    />
                </label>
            </div>
            <button type="submit">
                Add Pokémon
            </button>
        </form>
    );
}