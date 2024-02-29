import data from "./data.json";
import { Pokemon } from "./components/Pokemon";

export const Pokemons = () => {
  const pokemons = data.pokemons;
  console.log(pokemons);

  // function map over pokemon array and get each pokemon object to display to the UI!

  // Not Destructured
  const renderPokemons = () => {
    return pokemons.map((pokemon) => (
      <Pokemon
        key={pokemon.id}
        name={pokemon.name}
        weight={pokemon.weight}
        height={pokemon.height}
        types={pokemon.types}
        weaknesses={pokemon.weeknesses}
        category={pokemon.category}
      />
    ));
  };

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

  // Option 3
  const pokemonsExample = data.pokemons;
  return (
    <>
      <h2>Pokemon List</h2>
      {/* Option Demo */}
      {/* ------- */}
      {/* {pokemonsExample.map((pokemon) => (
        <>
          <h3>
            {pokemon.name} - {pokemon.id}
          </h3>
          <p>{pokemon.category}</p>
          <hr />
          <ul>
            Category
            {pokemon.types.map((type) => (
              <li>{type}</li>
            ))}
          </ul>
          <hr />
          <ul>
            Weakness
            {pokemon.weeknesses.map((weakness) => (
              <li>{weakness}</li>
            ))}
          </ul>
        </>
      ))} */}
      {/* OPTION 1 */}
      {/* ------- */}
      {/* {renderPokemons()} */}
      {/* OPTION 2 */}
      {/* ------- */}
      {renderPokemonsDestructured()}
    </>
  );
};
