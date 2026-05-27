import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import {PokemonProvider} from "./context/PokemonContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <PokemonProvider>
            <App />
          </PokemonProvider>
      </BrowserRouter>
  </StrictMode>,
)
