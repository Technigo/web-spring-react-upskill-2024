import { Destructured } from "./components/prop-examples/Destructured";
import { NonDestructured } from "./components/prop-examples/NonDestructured";
import { BandList } from "./components/bands/BandList";
import { ConditionalProp } from "./components/prop-examples/ConditionalProp";
import { PropDrilling } from "./components/prop-examples/PropDrilling";
import { ObjectType } from "./components/default-props/ObjectType";
import { ObjectTypePropTypes } from "./components/default-props/prop-types/ObjectTypePropTypes";
import { DestructuredDefault } from "./components/default-props/DestructuredDefault";
import { DestructuredDefaultPropTypes } from "./components/default-props/prop-types/DestructuredDefaultPropTypes";
import { Children } from "./components/children-props/Children";
import { Pokemons } from "./components/pokemon-example/Pokemons";

export const App = () => {
  const string = "I like listening to the  Red Hot Chilli Peppers";
  const stringTwo = "I like listening to NAS";

  const myObjectParent = {
    first: "Diego",
    last: "Zito",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur id atque explicabo ad tempora perspiciatis dolore aliquid illo suscipit consectetur.",
  };

  // Arrayof Objects
  const bands = [
    {
      name: "Red Hot Chili Peppers",
      genre: "Funk Rock",
      formed: 1983,
      members: [
        { name: "Anthony Kiedis", role: "Vocals" },
        { name: "Flea", role: "Bass" },
        { name: "John Frusciante", role: "Guitar" },
        { name: "Chad Smith", role: "Drums" },
      ],
      albums: [
        {
          title: "Californication",
          year: 1999,
          trackListing: [
            "Around the World",
            "Parallel Universe",
            "Scar Tissue",
            "Otherside",
            // Additional tracks omitted for brevity
          ],
        },
        {
          title: "By the Way",
          year: 2002,
          trackListing: [
            "By the Way",
            "Universally Speaking",
            "Dosed",
            "Don't Forget Me",
            // Additional tracks omitted for brevity
          ],
        },
        // Additional albums omitted for brevity
      ],
    },
    {
      name: "James Brown",
      genre: "Funk, Soul",
      formed: 1953,
      members: [
        { name: "James Brown", role: "Vocals, Keyboard" },
        // Other members over the years are omitted for brevity
      ],
      albums: [
        {
          title: "I Got You (I Feel Good)",
          year: 1966,
          trackListing: [
            "I Got You (I Feel Good)",
            "Lost Someone",
            "Night Train",
            "You've Got to Change Your Mind",
            // Additional tracks omitted for brevity
          ],
        },
        {
          title: "The Payback",
          year: 1973,
          trackListing: [
            "The Payback",
            "Doing the Best I Can",
            "Take Some... Leave Some",
            "Shoot Your Shot",
            // Additional tracks omitted for brevity
          ],
        },
        // Additional albums omitted for brevity
      ],
    },
  ];

  // Boolean Val
  const isLoggedInTopLevel = false;

  const { defaultvalue } = "Hello world";

  return (
    <>
      {/* --- */}
      {/* --- */}
      {/* UNCOMMENT TO VIEW IN ACTION */}
      {/* <Destructured
        stringProperty={string}
        propTwo={string}
        propThree={string}
        propFour={string}
        myObjectChild={myObjectParent}
      /> */}
      {/* --- */}
      {/* --- */}

      {/* UNCOMMENT TO VIEW IN ACTION */}
      {/* <NonDestructured
        propOne={stringTwo}
        propTwo={stringTwo}
        propThree={stringTwo}
      /> */}
      {/* --- */}
      {/* --- */}

      {/* UNCOMMENT TO VIEW IN ACTION */}
      {/* <BandList bands={bands} /> */}
      {/* --- */}
      {/* --- */}

      {/* <ConditionalProp isLoggedin={isLoggedInTopLevel} /> */}

      {/* <PropDrilling stringProperty={string} /> */}

      {/* THURDAY CLASS BELOW */}
      {/* <ObjectType /> */}
      {/* <ObjectType headingProp="I am a cool heading!!!" /> */}
      <ObjectTypePropTypes />

      {/* <DestructuredDefault /> */}
      <DestructuredDefaultPropTypes />

      {/* <Children /> */}

      {/* <Children>hello world</Children> */}

      {/* <Children>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        veritatis voluptatibus quis, omnis illum labore incidunt ipsum facere
        itaque natus tenetur cum sapiente quo recusandae blanditiis qui odit
        numquam. Esse sint rem, reprehenderit iusto saepe officia eum recusandae
        cum laudantium ex voluptatum ea harum. Molestias quisquam nesciunt
        placeat earum culpa!
      </Children> */}
      <Pokemons />
    </>
  );
};
