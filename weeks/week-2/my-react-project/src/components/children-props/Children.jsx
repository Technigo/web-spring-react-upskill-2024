export const Children = ({
  heading = "I am a heading",
  subheading = "I am subheading",
  children,
}) => {
  return (
    <>
      <h1>{heading}</h1>
      <h3>{subheading}</h3>
      <p>{children}</p>
    </>
  );
};
