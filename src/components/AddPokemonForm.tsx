import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { usePokemon } from '../context/PokemonContext';
import styles from './AddPokemonForm.module.css';
import {
    addPokemonSchema,
    type AddPokemonFormData,
    type AddPokemonFormInput,
    pokeApiSpriteUrlPrefix,
    pokemonRarities,
    pokemonTypes,
} from '../schemas/addPokemonSchema';


export function AddPokemonForm() {
    const { addPokemon } = usePokemon();
    const navigate = useNavigate();

    //input and data are different - level: number
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AddPokemonFormInput, unknown, AddPokemonFormData>({
        resolver: zodResolver(addPokemonSchema),
        defaultValues: {
            name: '',
            type: '',
            rarity: '',
            level: 1,
            imageFileName: '',
        },
    });

    const onSubmit = (data: AddPokemonFormData) => {
        const imageFileName = data.imageFileName.trim();

        addPokemon({
            name: data.name,
            type: data.type,
            rarity: data.rarity,
            level: data.level,
            imageUrl: imageFileName
                ? `${pokeApiSpriteUrlPrefix}${imageFileName}`
                : undefined,
        });

        reset();
        navigate('/');
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            noValidate
        >
            <h2 className={styles.title}>Add Pokémon</h2>

            <div className={styles.fields}>
                <label className={styles.field}>
                    <span className={styles.label}>Name</span>
                    <input
                        className={styles.input}
                        type="text"
                        {...register('name')}
                    />
                    {errors.name && (
                        <span className={styles.errorMessage}>
                            {errors.name.message}
                        </span>
                    )}
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>Type</span>
                    <select className={styles.input} {...register('type')}>
                        <option value="">Select type</option>
                        {pokemonTypes.map((pokemonType) => (
                            <option key={pokemonType} value={pokemonType}>
                                {pokemonType}
                            </option>
                        ))}
                    </select>
                    {errors.type && (
                        <span className={styles.errorMessage}>
                            {errors.type.message}
                        </span>
                    )}
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>Rarity</span>
                    <select className={styles.input} {...register('rarity')}>
                        <option value="">Select rarity</option>
                        {pokemonRarities.map((pokemonRarity) => (
                            <option key={pokemonRarity} value={pokemonRarity}>
                                {pokemonRarity}
                            </option>
                        ))}
                    </select>
                    {errors.rarity && (
                        <span className={styles.errorMessage}>
                            {errors.rarity.message}
                        </span>
                    )}
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>Level</span>
                    <input
                        className={styles.input}
                        type="number"
                        {...register('level')}
                    />
                    {errors.level && (
                        <span className={styles.errorMessage}>
                            {errors.level.message}
                        </span>
                    )}
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>
                        PokéAPI sprite file: (optional)
                    </span>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Example: 25.png"
                        {...register('imageFileName')}
                    />
                    {errors.imageFileName && (
                        <span className={styles.errorMessage}>
                            {errors.imageFileName.message}
                        </span>
                    )}
                </label>
            </div>

            <button type="submit" className={styles.submitButton}>
                Add Pokémon
            </button>
        </form>
    );
}