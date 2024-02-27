export const Destructured = ({
  stringProperty,
  propTwo,
  propThree,
  propFour,
  myObjectChild,
}) => {
  return (
    <>
      <h3>{stringProperty}</h3>
      <p>{propTwo}</p>
      <p>{propThree}</p>
      <p>{propFour}</p>
      <div>
        <h1>
          {myObjectChild.first} {myObjectChild.last}
          <span>{myObjectChild.bio}</span>
        </h1>
      </div>
    </>
  );
};
