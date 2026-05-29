import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePokemon } from '../context/PokemonContext';
import styles from './AddPokemonForm.module.css';

export function AddPokemonForm() {
    const { addPokemon } = usePokemon();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [rarity, setRarity] = useState('');
    const [level, setLevel] = useState('');

    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
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
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.title}>Add Pokémon</h2>

            <div className={styles.fields}>
                <label className={styles.field}>
                    <span className={styles.label}>Name</span>
                    <input
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>Type</span>
                    <input
                        className={styles.input}
                        type="text"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                        required
                    />
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>Rarity</span>
                    <input
                        className={styles.input}
                        type="text"
                        value={rarity}
                        onChange={(event) => setRarity(event.target.value)}
                        required
                    />
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>Level</span>
                    <input
                        className={styles.input}
                        type="number"
                        value={level}
                        onChange={(event) => setLevel(event.target.value)}
                        min="1"
                        max="100"
                        required
                    />
                </label>
            </div>

            <button type="submit" className={styles.submitButton}>
                Add Pokémon
            </button>
        </form>
    );
}