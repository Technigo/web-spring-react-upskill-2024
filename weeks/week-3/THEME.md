# Creating a Dark/Light Theme Toggle Using useState Hook

### Objective:

The objective of this homework assignment is to practice using the useState hook in React to create a functional component that toggles between a dark and light theme. The component should dynamically change the appearance of elements based on the selected theme.

### Instructions

1. Create a ThemeToggle Component:

- Create a new functional component named ThemeToggle.
- Import the necessary React hooks (useState) and any other dependencies.
- Initialize state using the useState hook to manage the current theme. You can represent the theme as a boolean value (true for light, false for dark) or any other appropriate data type.
- Create a button inside the component that allows users to toggle between the light and dark themes.
- Implement logic to change the theme state when the button is clicked.

2. Styling Elements Based on Theme:

- Decide on the styles for elements in both light and dark themes. You can define CSS classes for each theme in separate files or use inline styles within your components.
- Ensure that the styles appropriately reflect the chosen theme. For example, in a dark theme, text might be light-colored, while in a light theme, text might be dark-colored.

3. Apply Theme Styles Dynamically:

- Use conditional rendering or dynamic class assignment to apply the appropriate styles to elements based on the current theme state.
- When the theme changes (e.g., when the user clicks the toggle button), ensure that the styles of all relevant elements are updated accordingly.
