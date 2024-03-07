import { useState } from "react";

export const MultiStepForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    favoriteBand: "",
    favoriteAlbum: "",
    favoriteArtist: "",
    favoriteGenre: [],
  });

  // State to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Function to update the form data based onn its inputField and value
  const updateFormData = (field, value) => {
    setFormData((previousStepInfo) => ({
      ...previousStepInfo,
      [field]: value,
    }));
  };

  // UPDATEFORMDDATA EXPLANATION
  // The updateFormData function is designed to update the state of formData based on the provided field and value arguments. Let's break it down step by step:

  // Function Arguments:

  // field: This argument represents the key (or property name) in the formData object that you want to update. For example, it could be "name", "age", "email", etc.
  // value: This argument represents the new value that you want to assign to the specified field.
  // setFormData:

  // This is the state update function provided by the useState hook for the formData state. It's used to update the state of formData.
  // Function Body:

  // prev: This represents the current state of formData before any updates. It's a common pattern to use a function inside setState (or setFormData in this case) when the next state depends on the previous state.

  // { ...prev }: This syntax is called the spread operator. It's used to create a new object that contains all of the properties of the prev object. This ensures that we're not directly mutating the state, but instead creating a new copy of it.

  // [field]: value: This is a computed property name. It allows you to set the property of an object based on the value of a variable (field in this case). The value of this property will be set to the value argument passed to the function. For example, if field is "name" and value is "John", this would add or update the property "name" with the value "John" in the new object.

  // In summary, the updateFormData function takes a field and a value, and updates the formData state by creating a new object that contains all the previous properties and values, but with the specified field updated to the new value.

  // END Explanation
  // ---------
  // ---------
  // ---------
  // ---------

  return <div>MultiStepForm</div>;
};
