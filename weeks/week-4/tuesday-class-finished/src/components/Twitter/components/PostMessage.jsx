// Importing `useState` and `useEffect` hooks from "react" library
import { useState, useEffect } from "react";

export const PostMessage = ({ newMessage, fetchPosts }) => {
  // Declaring state `newPost` and its updater function `setNewPost`, initializing it with an empty string
  const [newPost, setNewPost] = useState("");
  // Declaring state `errorMessage` and its updater function `setErrorMessage`, initializing it with an empty string
  const [errorMessage, setErrorMessage] = useState("");

  // Using `useEffect` hook to perform side effects, specifically to check the length of `newPost` and set an error message if needed
  useEffect(() => {
    if (newPost.length >= 140) {
      setErrorMessage("Your message is too long 😔");
    } else {
      setErrorMessage("");
    }
  }, [newPost]);

  // Declaring a function `handleFormSubmit` to handle form submission
  const handleFormSubmit = async (event) => {
    // prevent reload
    event.preventDefault();

    //Checking if `newPost` is shorter than 5 characters
    try {
      if (newPost.length <= 4) {
        setErrorMessage(
          "Your message is too short, it needs to be at least 5 characters long... 😔"
        );
      } else {
        const options = {
          method: "POST", // Specifying the request method as POST
          // Stringifying `newPost` and setting it as the request body
          body: JSON.stringify({
            message: `${newPost}`,
          }),
          // Setting the content type of the request to application/json
          headers: { "Content-Type": "application/json" },
        };
        const API = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
        // Use 'fetch' to make an API call to the defined URL
        const response = await fetch(API, options);

        // Convert the raw response ('notClean') to JSON format
        const cleanInfo = await response.json();
        newMessage(cleanInfo);
        fetchPosts();
        setNewPost(" ");
        alert("message sent");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Enter your message here </h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          cols="50"
          rows="5"
          placeholder="'If music be the food of love, play on.' – William Shakespeare"
          value={newPost}
          onChange={(event) => setNewPost(event.target.value)}
        ></textarea>
        <div>
          <p>{errorMessage}</p>
          <p className={`${newPost.length >= 140 ? "error-message" : ""}`}>
            {newPost.length}/ 140 char
          </p>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </>
  );
};
