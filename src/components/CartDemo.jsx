import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {fruits} from "../utils/Fruits"

export const CartDemo = () => {
  

  const { cart, addItem, removeItem, clearCart } = useContext(CartContext);

  const handleAddItem = () => {
    let index = Math.floor(Math.random() * fruits.length);
    addItem({
      id: Date.now(),
      name: fruits[index],
    });
  };
  return (
    <div className="cart-container">
      <button className="add-btn" onClick={handleAddItem}>
        Add To Cart
      </button>
      <button className="clr-btn" onClick={clearCart}>
        Clear Cart
      </button>
      <ul className="items-list">
        {cart.map((item) => (
          <li className="items" key={item.id}>
            {item.name}
            <button className="rmv-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
