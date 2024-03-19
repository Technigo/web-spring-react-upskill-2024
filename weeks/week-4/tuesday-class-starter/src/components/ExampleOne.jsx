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
      if (cleanInfo) {
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

  useEffect(() => {
    fetchDogFact();
  }, []);

  // THIS WILL CAUSE AN INFINITE LOOP SINCE THE FACT REACTIVE DATA WILL ALWAYS RETRIGGER THE FETCHDOGFACT() FUNCTION - BREAKING THE PROGRAM
  //   useEffect(() => {
  //     fetchDogFact();
  //   }, [fact]);

  return (
    <>
      <div className="dog-card">
        <DogFactContainer fact={fact} />
      </div>
    </>
  );
};
