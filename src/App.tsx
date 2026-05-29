/* Styling method: CSS Modules */
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';
import { PokedexPage } from './pages/PokedexPage';
import { AddPokemonPage } from './pages/AddPokemonPage';
import { FavouritesPage } from './pages/FavouritePage';
import { PokemonDetailPage } from './pages/PokemonDetailPage';

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <h1 className={styles.title}>Pokédex</h1>

                <nav className={styles.nav}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLink} ${styles.active}`
                                : styles.navLink
                        }
                    >
                        My Pokédex
                    </NavLink>

                    <NavLink
                        to="/form"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLink} ${styles.active}`
                                : styles.navLink
                        }
                    >
                        Add Pokémon
                    </NavLink>

                    <NavLink
                        to="/favourites"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLink} ${styles.active}`
                                : styles.navLink
                        }
                    >
                        Favourites
                    </NavLink>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<PokedexPage />} />
                <Route path="/form" element={<AddPokemonPage />} />
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/pokemon/:pokeApiId" element={<PokemonDetailPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}

export default App;