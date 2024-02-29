import data from "./data.json";
import { Pokemon } from "./components/Pokemon";

export const Pokemons = () => {
  const pokemons = data.pokemons;
  console.log(pokemons);

  const renderPokemonsDestructured = () => {
    return pokemons.map(
      ({ id, name, weight, height, types, weeknesses, category }) => (
        <Pokemon
          key={id}
          name={name}
          weight={weight}
          height={height}
          types={types}
          weaknesses={weeknesses}
          category={category}
        />
      )
    );
  };

  return (
    <>
      <h2>Pokemon List</h2>

      {renderPokemonsDestructured()}
    </>
  );
};
