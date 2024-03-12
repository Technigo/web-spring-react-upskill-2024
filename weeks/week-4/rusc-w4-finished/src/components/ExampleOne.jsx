//The ExampleOne component, built using React, primarily focuses on fetching and displaying dog facts from an external API. Initially, it sets up a state variable named fact using the useState hook, which will eventually store the dog fact fetched from the API. The URL of the API is stored in a variable named dogApi. The component defines an asynchronous function fetchDogFact which utilizes the fetch API to retrieve data from dogApi. Upon receiving the data, it undergoes a series of transformations to extract the actual dog fact from the nested properties of the API response and updates the fact state using setFact. The useEffect hook is employed to ensure that fetchDogFact is invoked once the component is mounted, thereby fetching a dog fact right when the component renders for the first time. The component returns JSX that renders the dog fact within the DogFactContainer component and also includes a button. When this button is clicked, fetchDogFact is triggered again, fetching a new dog fact from the API and updating the UI with it. This component demonstrates a fundamental pattern of fetching data from an API, storing it in the component state, and updating the UI based on that state, in a React functional component.

import { useState, useEffect } from "react";
import { DogFactContainer } from "./DogFactContainer";

export const ExampleOne = () => {
  // Initialize state variable 'fact' with null and create a function 'setFact' to update it
  const [fact, setFact] = useState(null);

  // Define a string containing the URL of the dog facts API
  const dogApi = "https://dogapi.dog/api/v2/facts";

  // Define an asynchronous function 'fetchDogFact' to fetch a dog fact from the API
  const fetchDogFact = async () => {
    try {
      // Use 'fetch' to make an API call to the defined URL
      const response = await fetch(dogApi);

      // Convert the raw response ('notClean') to JSON format
      const cleanInfo = await response.json();

      // Check if 'data' property exists in the response
      if (cleanInfo.data) {
        // Extract the 'data' property from the response
        let cleanData = cleanInfo.data;

        // Extract the actual dog fact from the nested properties of the response
        let dogfactReceivedCleanedUpFromAPI = cleanData[0].attributes.body;

        // Update the 'fact' state with the extracted dog fact
        setFact(dogfactReceivedCleanedUpFromAPI);
      }
    } catch (error) {
      // Log any error message in case the fetch operation fails
      console.log(error);
    }
  };

  // Use 'useEffect' to call 'fetchDogFact' once when the component mounts
  useEffect(() => {
    fetchDogFact();
  }, []);

  // THIS WILL CAUSE AN INFINITE LOOP SINCE THE FACT REACTIVE DATA WILL ALWAYS RETRIGGER THE FETCHDOGFACT() FUNCTION - BREAKING THE PROGRAM
  //   useEffect(() => {
  //     fetchDogFact();
  //   }, [fact]);

  // Return JSX to render the component
  return (
    <div>
      <div className="dog-card">
        {/* Pass the 'fact' state as a prop to 'DogFactContainer' component */}
        <DogFactContainer fact={fact} />
        {/* Render a button that calls 'fetchDogFact' when clicked */}
        <button onClick={fetchDogFact}>Get another dog fact!</button>
      </div>
    </div>
  );
};
