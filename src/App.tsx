import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { PokedexPage } from './pages/PokedexPage.tsx';
import { AddPokemonPage } from './pages/AddPokemonPage';


function App() {

    return (
        <div>
            <header>
                <h1>Pokédex</h1>

                <nav>
                    <NavLink to="/">
                        My Pokédex
                    </NavLink>
                    <NavLink to="/form">
                        Add Pokémon
                    </NavLink>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<PokedexPage />} />
                <Route path="/form" element={<AddPokemonPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}

export default App;