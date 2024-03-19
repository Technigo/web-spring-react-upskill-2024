// Importing `PostMessage` and `MessageList` components from respective files
import { PostMessage } from "./components/PostMessage";
import { useState, useEffect } from "react";

export const Distributive = () => {
  // Declaring state `loading` and its updater function `setLoading`, initializing it with `false`
  const [loading, setLoading] = useState(false);
  // Declaring state `messageList` and its updater function `setMessageList`, initializing it with an empty array
  const [messageList, setMessageList] = useState([]);

  // Declaring a function `fetchPosts` to fetch posts from the API
  const fetchPosts = () => {
    // Setting `loading` state to `true` to indicate data fetching is in progress
    setLoading(true);
    // Making a GET request to the API endpoint
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      // Parsing the response as JSON
      .then((res) => res.json())
      // Updating `messageList` state with the parsed data
      .then((data) => setMessageList(data))
      // Logging any errors that occur during the fetch operation
      .catch((error) => console.error(error))
      // Setting `loading` state to `false` once data fetching is complete
      .finally(() => setLoading(false));
  };

  // I WILL LEAVE THE ASYNC AWAIT STRUCTURE HERE AFTER

  // Using `useEffect` hook to call `fetchPosts` once when the component mounts (due to the empty dependency array `[]`)
  useEffect(() => {
    fetchPosts();
  }, []);

  const addNewPost = (newMessage) => {
    // Updating `messageList` state by adding `newMessage` at the beginning of the array
    setMessageList([newMessage, ...messageList]);
  };

  const renderMessageList = () => {
    return messageList.map((message) => (
      <div className="dog-card" key={message._id}>
        <p>{message.message}</p>
        <p>Likes: {message.hearts}</p>
        <p>Created at: {message.createdAt.slice(0, 10)}</p>
      </div>
    ));
  };

  return (
    <>
      <PostMessage newMessage={addNewPost} fetchPosts={fetchPosts} />
      <>{renderMessageList()}</>
    </>
  );
};
