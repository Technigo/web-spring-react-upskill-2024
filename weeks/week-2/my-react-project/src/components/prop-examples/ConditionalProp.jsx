export const ConditionalProp = ({ isLoggedin }) => {
  return (
    <>
      <h2>Conditional Rendering Example</h2>
      {/* {conditionThatWeNeedToCheck ? (<p>This will show if the condition is true</p>) : (<p>This will show if the condition is false</p>)} */}
      {isLoggedin ? (
        <div className="logged-in">
          <p>Welcome, user! You are logged in.</p>
        </div>
      ) : (
        <div className="not-logged-in">
          <p>Please log in to continue.</p>
        </div>
      )}
    </>
  );
};
