import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'
import App from './App.tsx'
import {PokemonProvider} from "./context/PokemonContext.tsx";


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <PokemonProvider>
                  <App />
              </PokemonProvider>
          </BrowserRouter>
      </QueryClientProvider>
  </StrictMode>,
)
