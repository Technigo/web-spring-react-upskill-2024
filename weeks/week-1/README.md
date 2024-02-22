Week 1

# Introduction to React JS Components

## What is React JS?

React JS is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components that manage their own state and can be composed together to build complex applications.

## Why React JS?

React JS simplifies the process of building interactive user interfaces by breaking them down into reusable components. This approach improves code organization, enhances maintainability, and promotes code reusability, resulting in faster development cycles and better overall performance.

## How React JS Components Work

### Functional Components

Functional components are a modern approach to building React components. They are essentially JavaScript functions that return React elements, describing what should appear on the screen. Functional components have become increasingly popular due to their simplicity and readability.

#### Key Features of Functional Components:

- **Simplicity**: Functional components are simpler to read and write compared to class components.
- **Reusability**: They promote code reusability by encapsulating UI logic into modular components.
- **Performance**: Functional components are lightweight and have better performance optimizations compared to class components.

#### Example of a Functional Component:

```jsx
import React from "react";

export const MyComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};
```

Explanation:

1.  Import React:

    - `import React from "react";`: This line imports the React library, which is necessary for creating React components.

2.  Functional Component Declaration:

    - `export const MyComponent = () => {`:
      - `export const`: This keyword combination exports the component so it can be imported and used in other parts of the application.
      - `MyComponent`: This is the name of the component. It can be any valid JavaScript identifier.
      - `() => { ... }`: This is an arrow function declaration defining the functional component. It takes no arguments.

3.  Component's Return Statement:

    - `return ( ... );`: This is the return statement of the functional component, which returns JSX (JavaScript XML) markup. JSX is a syntax extension for JavaScript that allows us to write HTML-like code within JavaScript.
    - `<div>`: This is a JSX element representing a `div` HTML tag.
    - `<h1>Hello, World!</h1>`: This is another JSX element representing an `h1` HTML tag with the text "Hello, World!" inside it.
    - `</div>`: Closing tag for the `div` element.

4.  Function Closure:

    - The arrow function `() => { ... }` defines a closure that encapsulates the JSX markup. This closure represents the functional component `MyComponent`.

5.  Exporting the Component:

    - `export default MyComponent;`: This line exports the `MyComponent` functional component as the default export. This allows other parts of the application to import and use it.

In summary, the code defines a functional component named `MyComponent` that renders a simple `div` containing an `h1` tag with the text "Hello, World!". This component can be imported and used in other parts of a React application.

## Conclusion

Understanding React JS components, particularly functional components, is crucial for developing modern web applications. By breaking down user interfaces into reusable and modular components, developers can create more efficient, maintainable, and scalable applications.
