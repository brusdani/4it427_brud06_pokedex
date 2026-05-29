import styles from '../components/PokemonDetail.module.css';

const typeClassMap: Record<string, string> = {
    normal: styles.normalType,
    fire: styles.fireType,
    water: styles.waterType,
    electric: styles.electricType,
    grass: styles.grassType,
    ice: styles.iceType,
    fighting: styles.fightingType,
    poison: styles.poisonType,
    ground: styles.groundType,
    flying: styles.flyingType,
    psychic: styles.psychicType,
    bug: styles.bugType,
    rock: styles.rockType,
    ghost: styles.ghostType,
    dragon: styles.dragonType,
    dark: styles.darkType,
    steel: styles.steelType,
    fairy: styles.fairyType,
};

export function getPokemonTypeClass(type: string): string {
    return typeClassMap[type] ?? styles.defaultType;
}