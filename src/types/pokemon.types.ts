export type Pokemon = {
    id: string;
    name: string;
    type: string;
    rarity: string;
    level: number;
    favourite: boolean;
    caught: boolean;
    imageUrl?: string;
    pokeApiId?: number;
};