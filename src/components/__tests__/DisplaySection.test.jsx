import { render, screen } from "@testing-library/react";
import { DisplaySection } from "../DisplaySection";

test("Renders 'Please choose a pokemon' when pokemon is not chosen", () => {
  render(<DisplaySection pokemonChosen={false} />);

  const message = screen.getByText(/Please choose a Pokemon/i);

  expect(message).toBeInTheDocument();
});

test("Renders pokemon information when pokemon data is fetched", () => {
  const gengar = {
    name: "gengar",
    species: "ghost pokemon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    hp: 35,
    attack: 55,
    defence: 40,
    type: "ghost/poison",
  };

  render(<DisplaySection pokemonChosen={true} pokemon={gengar} />);

  const pokemonName = screen.getByText("gengar");
  const pokemonSpecies = screen.getByText("Species: ghost pokemon");
  const pokemonImage = screen.getByRole("img");
  const pokemonHP = screen.getByText("HP: 35");
  const pokemonAttack = screen.getByText("Attack: 55");
  const pokemonDefence = screen.getByText("Defence: 40");
  const pokemonType = screen.getByText("Type: ghost/poison");

  expect(pokemonName).toBeInTheDocument();
  expect(pokemonSpecies).toBeInTheDocument();
  expect(pokemonImage).toBeInTheDocument();
  expect(pokemonHP).toBeInTheDocument();
  expect(pokemonAttack).toBeInTheDocument();
  expect(pokemonDefence).toBeInTheDocument();
  expect(pokemonType).toBeInTheDocument();
});
