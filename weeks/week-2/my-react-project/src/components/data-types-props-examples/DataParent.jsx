import { Array } from "./Array";
import { Function } from "./Function";
import { Number } from "./Number";
import { Text } from "./Text";
import { Object } from "./Object";
import { Boolean } from "./Boolean";
import { Image } from "./Image";
import { ImageTwo } from "./ImageTwo";

export const DataParent = () => {
  const textProp = "Hello, World!";
  const numberProp = 42;
  const arrayProp = ["Item 1", "Item 2", "Item 3"];

  const handleClick = () => {
    alert("Button clicked!");
  };

  const showCurrentDate = () => {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    const yyyy = today.getFullYear();
    const formattedDate = `${mm}-${dd}-${yyyy}`;

    alert(`Today's date is: ${formattedDate}`);
  };

  const person = {
    name: "Diego Zito",
    age: 32,
  };

  const imageURL = `https://www.revistafreerockin.com/wp-content/uploads/2019/07/zx.jpg`;
  const imageAltText = "A cool picture about the Red Hot Chilli Peppers";

  // Array of classes to pass
  const imageClasses = ["custom-image", "rounded", "border"];

  return (
    <div className="explanation">
      <Text text={textProp} />
      <hr />
      <Number number={numberProp} />
      <hr />
      <Function onClick={handleClick} />
      <Function onClick={showCurrentDate} />
      <hr />
      <Array items={arrayProp} />
      <hr />
      <Object personObject={person} />
      <hr />
      <Boolean value={true} />
      <hr />
      <Boolean value={false} />
      <hr />
      <Image imageSrc={imageURL} imageAlt={imageAltText} />
      <Image
        imageSrc={imageURL}
        imageAlt={imageAltText}
        className="some-css-class"
      />
      <ImageTwo
        imageSrc={imageURL}
        imageAlt={imageAltText}
        classNames={imageClasses}
      />
    </div>
  );
};
