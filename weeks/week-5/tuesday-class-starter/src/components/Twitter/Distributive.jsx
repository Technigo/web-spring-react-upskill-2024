// Importing `useState` and `useEffect` hooks from "react" library
import { useState, useEffect } from "react";
// Importing `PostMessage` and `MessageList` components from respective files
import { PostMessage } from "./components/PostMessage";

export const Distributive = () => {
  // Declaring state `loading` and its updater function `setLoading`, initializing it with `false`
  const [loading, setLoading] = useState(true);
  // Declaring state `messageList` and its updater function `setMessageList`, initializing it with an empty array
  const [messageList, setMessageList] = useState([]);

  // Declaring a function `fetchPosts` to fetch posts from the API
  const twitterAPi = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const fetchPosts = async () => {
    try {
      setLoading(false);
      const response = await fetch(twitterAPi);
      const data = await response.json();
      setMessageList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addnewPost = (newMessage) => {
    setMessageList([newMessage, ...messageList]);
  };

  useEffect(() => {
    fetchPosts();
  }, [addnewPost]);

  const renderMessageList = () => {
    return messageList.map((message) => (
      <div key={message._id} className="dog-card">
        <p>{message.message}</p>
        <span>{message.createdAt}</span>
      </div>
    ));
  };
  return (
    <div className="main-wrapper">
      {/* Rendering `PostMessage` component and passing `addNewPost` and `fetchPosts` as props */}
      <PostMessage newMessage={addnewPost} fetchPosts={fetchPosts} />
      <>{renderMessageList()}</>
    </div>
  );
};
