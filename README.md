# Pokédex React app

Semestral project for the course **4IT427 – React.js Programming Basics**.

This project is a simple Pokédex application built with React and TypeScript. The application allows users to browse Pokémon, mark them as caught or favourite, add new Pokémon, remove Pokémon from the list, and view a separate page with favourite Pokémon.

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- CSS Modules
- Vitest
- React Testing Library

Install project dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```
## Tests

The project contains:

- a unit test for helper functions in `pokemonUtils.test.ts`
- an integration test for the `PokemonCard` component in `PokemonCard.test.tsx`

Run tests with:

```bash
npm run test
```

## Data Source

The initial Pokémon data are stored in a local JSON file:

```txt
public/pokemon.json
```
## Author

Daniel Brus