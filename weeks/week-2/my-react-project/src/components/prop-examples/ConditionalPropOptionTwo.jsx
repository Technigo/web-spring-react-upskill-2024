export const ConditionalPropOptionTwo = ({ isLoggedIn }) => {
  const renderContent = () => {
    if (isLoggedIn) {
      return (
        <div>
          <h5>Conditional Rendering Example Optionn 2</h5>
          <div className="logged-in">
            <p>Welcome, user! You are logged in.</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Conditional Rendering Example</h2>
          <div className="not-logged-in">
            <p>Please log in to continue.</p>
          </div>
        </div>
      );
    }
  };
  return renderContent();
};
