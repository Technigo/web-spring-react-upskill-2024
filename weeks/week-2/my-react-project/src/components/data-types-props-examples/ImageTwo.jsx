export const ImageTwo = ({ imageSrc, imageAlt, classNames }) => {
  // Joining the array of classes into a single string
  const combinedClassNames = classNames ? classNames.join(" ") : "";
  return (
    <div className={combinedClassNames}>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
};
