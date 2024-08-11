import React from "react";

const CartItem = ({ product, updateQuantity, removeProduct }) => {
  return (
    <li className="flex justify-between items-center bg-zinc-600 p-4 rounded-lg shadow-lg">
      <div className="flex flex-col">
        <span className="text-xl font-semibold">{product.name}</span>
        <span>Price: ₹{product.price.toFixed(2)}</span>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="px-3 py-1 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          onClick={() => removeProduct(product.id)}
        >
          Remove
        </button>
        <div className="flex items-center space-x-2">
          <button
            className="px-2 py-1 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            onClick={() => updateQuantity(product.id, product.quantity - 1)}
          >
            -
          </button>
          <input
            type="number"
            value={product.quantity}
            min="1"
            className="w-12 text-center text-black rounded-lg"
            onChange={(e) => updateQuantity(product.id, e.target.value)}
          />
          <button
            className="px-2 py-1 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            onClick={() => updateQuantity(product.id, product.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
