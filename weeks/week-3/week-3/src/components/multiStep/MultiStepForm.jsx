import { useState } from "react";
import { Name } from "./Name";
import { Age } from "./Age";
import { Email } from "./Email";
import { Band } from "./Band";
import { Album } from "./Album";
import { Artist } from "./Artist";
import { Genres } from "./Genres";

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

  // State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);
  // Function to move to the next step in the form
  const nextStep = () => {
    // Check if current step is not the last step
    if (currentStep < 7) {
      // Check if the current step is complete - using a switch
      switch (currentStep) {
        case 1:
          // Condition: Check if name field is not empty
          if (formData.name.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your name");
          break;
        case 2:
          // Condition: Check if age field is not empty
          if (formData.age.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your age");
          break;
        case 3:
          // Condition: Check if email field is not empty
          if (formData.email.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your email");
          break;
        case 4:
          // Condition: Check if favoriteBand field is not empty
          if (formData.favoriteBand.trim() !== "")
            setCurrentStep(currentStep + 1);
          else alert("Please select your favorite band");
          break;
        case 5:
          // Condition: Check if favoriteAlbum field is not empty
          if (formData.favoriteAlbum.trim() !== "")
            setCurrentStep(currentStep + 1);
          else alert("Please select your favorite album");
          break;
        case 6:
          // Condition: Check if favoriteAlbum field is not empty
          if (formData.favoriteArtist.trim() !== "")
            setCurrentStep(currentStep + 1);
          else alert("Please select your favorite Artist");
          break;
        default:
          // Proceed to the next step if all conditions are met
          setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // function to submit the form itself
  const submitForm = () => {
    console.log(formData);
    setFormSubmitted(true);
    const formattedData = `
    Name: ${formData.name}
    Age: ${formData.age}
    Email: ${formData.email}
    Favorite Band: ${formData.favoriteBand}
    Favorite Album: ${formData.favoriteAlbum}
    Favorite Artist: ${formData.favoriteArtist}
    Favorite Genre: ${formData.favoriteGenre}
  `;
    alert(formattedData);
  };

  // Function to reset the form and start over
  const startOver = () => {
    setFormData({
      name: "",
      age: "",
      email: "",
      favoriteBand: "",
      favoriteAlbum: "",
      favoriteArtist: "",
      favoriteGenre: [],
    });
    setFormSubmitted(false);
    setCurrentStep(1); // Reset to the first step
  };

  return (
    <>
      {currentStep === 1 && (
        <Name value={formData.name} updateFormData={updateFormData} />
      )}
      {currentStep === 2 && (
        <Age value={formData.age} updateFormData={updateFormData} />
      )}
      {currentStep === 3 && (
        <Email value={formData.email} updateFormData={updateFormData} />
      )}
      {currentStep === 4 && (
        <Band value={formData.favoriteBand} updateFormData={updateFormData} />
      )}
      {currentStep === 5 && (
        <Album value={formData.favoriteAlbum} updateFormData={updateFormData} />
      )}
      {currentStep === 6 && (
        <Artist
          value={formData.favoriteArtist}
          updateFormData={updateFormData}
        />
      )}
      {/* We'll be changing this later, why ? =- lasts steps and irst steps can be protected!  */}
      {currentStep === 7 && (
        <Genres
          value={formData.favoriteGenre}
          updateFormData={updateFormData}
        />
      )}
      {!formSubmitted && (
        <div>
          {/* Show the "Back" button if not on the first step */}
          {currentStep > 1 && <button onClick={prevStep}>Back</button>}
          {currentStep < 7 ? (
            <button onClick={nextStep}>Next</button>
          ) : (
            <button onClick={submitForm}>Submit Form</button>
          )}
        </div>
      )}
      {formSubmitted && (
        <>
          <div className="form-responses">
            <h2>Grammys Voting Form - Your Submission</h2>
            <iframe
              src="https://giphy.com/embed/tqfS3mgQU28ko"
              width="400"
              height="100"
              frameBorder="0"
              class="giphy-embed"
            ></iframe>
            <p>
              <span>Name:</span> {formData.name}
            </p>
            <p>
              <span>Age:</span> {formData.age}
            </p>
            <p>
              <span>Email:</span> {formData.email}
            </p>
            <p>
              <span>Favorite Band:</span> {formData.favoriteBand}
            </p>
            <p>
              <span>Favorite Album:</span> {formData.favoriteAlbum}
            </p>
            <p>
              <span>Favorite Artist:</span> {formData.favoriteArtist}
            </p>

            <p>
              <span>Favorite Genre:</span>
            </p>
            {formData.favoriteGenre.map((genre) => (
              <p className="response-genres">{genre}</p>
            ))}
            {/* Button to start over */}
            <button onClick={startOver}>Start Over</button>
          </div>
        </>
      )}
    </>
  );
};
