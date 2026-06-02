import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import { PokemonCard } from './PokemonCard';

const defaultProps = {
    id: '1',
    name: 'Pikachu',
    type: 'Electric',
    rarity: 'Common',
    level: 25,
    favourite: true,
    caught: true,
    onToggleCaught: vi.fn(),
    onToggleFavourite: vi.fn(),
    onRemove: vi.fn(),
};

describe('PokemonCard', () => {
    it('renders Pokémon name, type, rarity and level', () => {
        render(<PokemonCard {...defaultProps} />);

        expect(screen.getByText('Pikachu')).toBeInTheDocument();
        expect(screen.getByText(/Electric/i)).toBeInTheDocument();
        expect(screen.getByText(/Common/i)).toBeInTheDocument();
        expect(screen.getByText(/25/)).toBeInTheDocument();
    });

    it('shows caught badge when Pokémon is caught', () => {
        render(<PokemonCard {...defaultProps} caught={true} />);

        expect(screen.getByText(/✓ Caught/i)).toBeInTheDocument();
    });

    it('does not show caught badge when Pokémon is not caught', () => {
        render(<PokemonCard {...defaultProps} caught={false} />);

        expect(screen.queryByText(/✓ Caught/i)).not.toBeInTheDocument();
    });

    it('shows favourite badge when Pokémon is favourite', () => {
        render(<PokemonCard {...defaultProps} favourite={true} />);

        expect(screen.getByText(/★ Favourite/i)).toBeInTheDocument();
    });

    it('does not show favourite badge when Pokémon is not favourite', () => {
        render(<PokemonCard {...defaultProps} favourite={false} />);

        expect(screen.queryByText(/★ Favourite/i)).not.toBeInTheDocument();
    });

    it('shows invalid level message when level is outside valid range', () => {
        render(<PokemonCard {...defaultProps} level={101} />);

        expect(screen.getByText(/neplatný level/i)).toBeInTheDocument();
    });

    it('calls onToggleCaught with Pokémon id after clicking caught button', async () => {
        const user = userEvent.setup();
        const onToggleCaught = vi.fn();

        render(
            <PokemonCard
                {...defaultProps}
                onToggleCaught={onToggleCaught}
            />
        );

        await user.click(
            screen.getByRole('button', { name: /change caught state/i })
        );

        expect(onToggleCaught).toHaveBeenCalledTimes(1);
        expect(onToggleCaught).toHaveBeenCalledWith('1');
    });

    it('calls onToggleFavourite with Pokémon id after clicking favourite button', async () => {
        const user = userEvent.setup();
        const onToggleFavourite = vi.fn();

        render(
            <PokemonCard
                {...defaultProps}
                onToggleFavourite={onToggleFavourite}
            />
        );

        await user.click(
            screen.getByRole('button', { name: /remove from favourites/i })
        );

        expect(onToggleFavourite).toHaveBeenCalledTimes(1);
        expect(onToggleFavourite).toHaveBeenCalledWith('1');
    });

    it('calls onRemove with Pokémon id after clicking remove button', async () => {
        const user = userEvent.setup();
        const onRemove = vi.fn();

        render(
            <PokemonCard
                {...defaultProps}
                onRemove={onRemove}
            />
        );

        await user.click(
            screen.getByRole('button', { name: /^remove$/i })
        );

        expect(onRemove).toHaveBeenCalledTimes(1);
        expect(onRemove).toHaveBeenCalledWith('1');
    });
});
it('shows detail link when Pokémon has pokeApiId', () => {
    render(
        <MemoryRouter>
            <PokemonCard {...defaultProps} pokeApiId={25} />
        </MemoryRouter>
    );

    const detailLink = screen.getByRole('link', { name: /view detail/i });

    expect(detailLink).toBeInTheDocument();
    expect(detailLink).toHaveAttribute('href', '/pokemon/25');
});

it('does not show detail link when Pokémon does not have pokeApiId', () => {
    render(<PokemonCard {...defaultProps} />);

    expect(
        screen.queryByRole('link', { name: /view detail/i })
    ).not.toBeInTheDocument();
});