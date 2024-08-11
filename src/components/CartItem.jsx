import React from "react";

const CartItem = ({ product, updateQuantity, removeProduct }) => {
  const totalCost = product.price * product.quantity;

  return (
    <li className="flex justify-between items-center bg-zinc-700 p-4 rounded-lg shadow-md">
      <div>
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-300">Price: ₹{product.price}</p>
        <div className="flex items-center mt-2">
          <label className="mr-2">Qty:</label>
          <input
            type="number"
            value={product.quantity}
            min="1"
            className="w-16 p-1 text-black rounded-lg"
            onChange={(e) => updateQuantity(product.id, e.target.value)}
          />
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">
          {product.quantity} x ₹{product.price} = ₹{totalCost.toFixed(2)}
        </p>
        <button
          className="mt-2 bg-red-500 text-white px-4 py-1 rounded-lg"
          onClick={() => removeProduct(product.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
