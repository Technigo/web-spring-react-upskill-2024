# Explanation

# Global State Management in React

Global state management in React is a fundamental concept that helps developers manage and share data across different parts of a React application. It is particularly useful when dealing with complex applications with many components that need access to the same data, or when you want to avoid "prop drilling."

## What is Global State Management?

Global state management refers to the practice of maintaining application-level data in a central location where it can be accessed and modified by various components. This central store of data is often referred to as "global state." It serves as a single source of truth for your application's data, making it easier to keep track of and synchronize data changes across different parts of your app.

## Why Use Global State Management?

1.  Avoid Prop Drilling: Prop drilling occurs when you need to pass data down multiple levels of nested components. This can make your code more complex and harder to maintain. Global state management eliminates the need for prop drilling by providing a centralized store of data that can be accessed from anywhere in your app.

2.  Synchronize State: In a complex application, it's crucial to ensure that different parts of your app have access to the same up-to-date data. Global state management ensures that changes to the data are synchronized across components, reducing bugs related to stale or inconsistent data.

3.  Modular Code: Global state management allows you to create more modular and reusable components. Components can focus on rendering and behavior without being tightly coupled to the data they display.

4.  Improved Developer Experience: It simplifies the development process by providing a clear and organized way to manage data. Developers spend less time passing props and tracking data flow, leading to increased productivity.

## Context API in React

The Context API is a built-in feature in React that provides a way to share data between components without the need to pass props manually through every intermediate component. It consists of two main parts: the Context.Provider and the useContext hook.

Context.Provider: This component wraps a portion of your application and provides the data that needs to be shared globally. It takes a value prop, which holds the data to be shared.

useContext Hook: Components can consume the data provided by the Context.Provider using the useContext hook. It allows components to access the global state without the need for prop drilling.

### Usefull Links

[Context API tutorial](https://www.youtube.com/watch?v=sP7ANcTpJr8)

# STORAGE WITHIN THE BROWSER

## Explanation of Browser Storage Mechanisms

### Local Storage

**What is Local Storage?**
Local storage is a mechanism available in modern web browsers that allows web applications to store data persistently within the user's browser. This data remains even after the browser is closed and can be accessed by the same web application whenever the user revisits the site.

**Why Use Local Storage?**

1. **Persistence:** Data stored in local storage persists across browser sessions, allowing for a seamless user experience.
2. **Large Storage Capacity:** Local storage typically allows for larger storage capacity compared to cookies, making it suitable for storing substantial amounts of data locally.
3. **Improved Performance:** Accessing data from local storage is faster than fetching it from a remote server, which can lead to improved performance in web applications.

**How to Use Local Storage?**

- **Set Item:** Use `localStorage.setItem(key, value)` to store data in local storage.
- **Get Item:** Retrieve stored data using `localStorage.getItem(key)`.
- **Remove Item:** Remove specific data from local storage with `localStorage.removeItem(key)`.
- **Clear Storage:** Clear all data stored in local storage using `localStorage.clear()`.

### Session Storage

**What is Session Storage?**
Similar to local storage, session storage is a web browser mechanism for storing data on the client side. However, session storage differs in that it only persists for the duration of the page session. Once the user closes the tab or browser, the data is cleared.

**Why Use Session Storage?**

1. **Temporary Data Storage:** Session storage is useful for storing temporary data that should only persist for the duration of a browsing session.
2. **Security:** Since session storage data is cleared when the session ends, it can be more secure for storing sensitive information compared to local storage.

**How to Use Session Storage?**

- **Set Item:** Store data in session storage using `sessionStorage.setItem(key, value)`.
- **Get Item:** Retrieve stored data with `sessionStorage.getItem(key)`.
- **Remove Item:** Remove specific data from session storage using `sessionStorage.removeItem(key)`.
- **Clear Storage:** Clear all data stored in session storage with `sessionStorage.clear()`.

### Cookies

**What are Cookies?**
Cookies are small pieces of data stored in the user's browser. They are commonly used for tracking user activity, maintaining user sessions, and storing user preferences across multiple visits to a website.

**Why Use Cookies?**

1. **User Authentication:** Cookies are often used for maintaining user sessions and authentication tokens, allowing users to stay logged in across multiple page visits.
2. **Customization:** Websites can use cookies to remember user preferences and settings, providing a personalized browsing experience.
3. **Tracking:** Cookies enable website owners to track user behavior and gather analytics data for improving website performance and user experience.

**How to Use Cookies?**

- **Set Cookie:** Set a cookie using JavaScript's `document.cookie` property.
- **Get Cookie:** Retrieve cookie data from the `document.cookie` property.
- **Delete Cookie:** Remove a cookie by setting its expiration date to a past time.

By utilizing these browser storage mechanisms effectively, web developers can enhance the functionality and user experience of their web applications.
