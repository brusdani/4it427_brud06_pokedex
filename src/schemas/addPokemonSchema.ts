import { z } from 'zod';

export const pokeApiSpriteUrlPrefix =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const pokemonTypes = ['Electric', 'Fire', 'Grass', 'Water', 'Psychic'];

export const pokemonRarities = ['Common', 'Rare', 'Legendary'];

export const addPokemonSchema = z.object({
    name: z.string().trim().min(1, 'Name is required.'),
    type: z.string().min(1, 'Type is required.'),
    rarity: z.string().min(1, 'Rarity is required.'),
    level: z.coerce
        .number()
        .int('Level must be a whole number.')
        .min(1, 'Level must be at least 1.')
        .max(100, 'Level must be at most 100.'),
    imageFileName: z
        .string()
        .trim()
        .regex(
            /^$|^\d+\.png$/,
            'Image file must be empty or in format like 25.png.'
        ),
});

export type AddPokemonFormInput = z.input<typeof addPokemonSchema>;

export type AddPokemonFormData = z.output<typeof addPokemonSchema>;