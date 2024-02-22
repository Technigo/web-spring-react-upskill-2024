export const MyThirdComponent = () => {
  const isLoggedIn = true;
  const username = "JohnDoe";
  const age = 25;
  const isAdmin = true;

  // Helper function for Example 4
  function renderCustomMessage() {
    const message = isAdmin
      ? "You have special access."
      : "You have standard access.";
    return <p>{message}</p>;
  }

  return (
    <div>
      <h2>Conditional Rendering Examples:</h2>
      {/* Example 1: Rendering based on a boolean value */}
      {isLoggedIn ? (
        <p>Welcome, {username}! You are logged in.</p>
      ) : (
        <p>Please log in to access the content.</p>
      )}

      {/* Example 2: Rendering based on a comparison */}
      {age >= 18 ? (
        <p>You are {age} years old. You are eligible to vote.</p>
      ) : (
        <p>You are {age} years old. You are not eligible to vote yet.</p>
      )}

      {/* Example 3: Rendering based on logical conditions */}
      {isAdmin && <p>You have admin privileges. You can manage users.</p>}

      {/* Example 4: Rendering based on a function */}
      {renderCustomMessage()}

      {/* Example 5: Rendering based on a variable */}
      {isLoggedIn && <p>Thank you for logging in.</p>}
    </div>
  );
};
