// Explanation
// In this component, two primary states, cartItems and totalPrice, are utilized to manage the items in the cart and the cumulative price, respectively. The cartItems state encompasses an array of items, each characterized by properties like id, name, price, and quantity. The useEffect hook, which is intrinsically linked to the cartItems state through its dependency array, ensures that any modification to the items—whether through addition, removal, or quantity alteration—triggers a recalibration of the totalPrice. This recalibration is executed by iterating through cartItems, multiplying the price and quantity of each item, and summing these values to derive the new total price, which is then set to the totalPrice state. Furthermore, the component provides an interactive user interface, allowing quantity adjustments through an input field. The handleQuantityChange function facilitates this, updating the quantity of the respective item in the cartItems state, and consequently invoking the useEffect to update the total price. This exemplifies a practical application of useEffect with dependencies, ensuring efficient and responsive state management in the React component.

import { useState, useEffect } from "react";

export const ExampleFour = () => {
  // State to hold the items in the cart
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Apple", price: 0.5, quantity: 2 },
    { id: 2, name: "Banana", price: 0.3, quantity: 3 },
    // ... other items
  ]);

  // State to hold the total price of the cart
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect hook to update the total price whenever cartItems change
  useEffect(() => {
    // Calculate the total price of the cart items
    const newTotalPrice = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    // Update the total price state
    setTotalPrice(newTotalPrice);
  }, [cartItems]); // Dependency array includes cartItems

  // Function to handle quantity change of an item
  const handleQuantityChange = (id, quantity) => {
    // Update the quantity of the item with the given id
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <div className="shopping-card">
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleQuantityChange(item.id, parseInt(e.target.value))
              }
            />
            = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

// Explanation
// In the provided ShoppingCart component, two primary states, cartItems and totalPrice, are utilized to manage the items in the cart and the cumulative price, respectively. The cartItems state encompasses an array of items, each characterized by properties like id, name, price, and quantity. The useEffect hook, which is intrinsically linked to the cartItems state through its dependency array, ensures that any modification to the items—whether through addition, removal, or quantity alteration—triggers a recalibration of the totalPrice. This recalibration is executed by iterating through cartItems, multiplying the price and quantity of each item, and summing these values to derive the new total price, which is then set to the totalPrice state. Furthermore, the component provides an interactive user interface, allowing quantity adjustments through an input field. The handleQuantityChange function facilitates this, updating the quantity of the respective item in the cartItems state, and consequently invoking the useEffect to update the total price. This exemplifies a practical application of useEffect with dependencies, ensuring efficient and responsive state management in the React component.
