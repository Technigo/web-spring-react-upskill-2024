export const Image = ({ imageSrc, imageAlt, className }) => {
  return (
    <div className={className}>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
};
