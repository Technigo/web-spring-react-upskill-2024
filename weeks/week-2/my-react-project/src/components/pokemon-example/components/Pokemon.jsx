import { Type } from "./PokemonInfo/Type";
import { Weaknesses } from "./PokemonInfo/Weaknesses";
import { Category } from "./PokemonInfo/Category";

export const Pokemon = ({
  name,
  weight,
  height,
  types,
  weaknesses,
  category,
}) => {
  return (
    <div className="pokemon">
      <p>
        <span>Pokemon name:</span> {name}
      </p>
      <p>
        <span>Weight:</span>
        {weight}
      </p>
      <p>
        <span>Height:</span> {height}
      </p>
      {/* Seperation of child components of this comp */}
      <div>
        <Type types={types} />
        <Weaknesses weaknesses={weaknesses} />
        <Category category={category} />
      </div>
    </div>
  );
};

Pokemon.defaultProps = {
  name: "Pokemon Name is Missing",
  weight: "No Pokemon has been selected",
};
