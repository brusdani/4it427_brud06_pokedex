# Pokédex React app

Semestral project for the course **4IT427 – React.js Programming Basics**.

This project is a simple Pokédex application built with React and TypeScript. 
The application allows users to browse and search for Pokémon, mark them as caught or favourite, 
add new Pokémon, remove Pokémon from the list, and view a separate page with favourite Pokémon.
It also allows users to open a detail page with additional data loaded from PokéAPI.

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- React Hook Form
- Zod
- CSS Modules
- Vitest
- React Testing Library

## Routes

- `/` – main Pokédex page
- `/form` – page for adding a new Pokémon
- `/favourites` – page with favourite Pokémon
- `/pokemon/:pokeApiId` – Pokémon detail page loaded from PokéAPI

## Getting started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.


### Installation
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

- unit tests for helper functions in `pokemonUtils.test.ts`
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
- Pokémon detail data are loaded from the public PokéAPI. This project is created only for educational and non-commercial purposes.

## Author

Daniel Brus