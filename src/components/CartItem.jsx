import React from "react";

const CartItem = ({ product, updateQuantity, removeProduct }) => {
  const totalCost = product.price * product.quantity;

  const handleDecrease = () => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(product.id, product.quantity + 1);
  };

  return (
    <li className="flex justify-between items-center bg-emerald-100 p-4 rounded-lg shadow-md">
      <div>
        <h2 className="text-xl text-zinc-900 font-semibold">{product.name}</h2>
        <p className="text-zinc-900">Price: ₹{product.price}</p>
        <div className="flex items-center mt-2">
          <label className="mr-2 text-zinc-900">Qty:</label>
          <button
            className="bg-emerald-700 text-white  px-4 py-1 rounded-md"
            onClick={handleDecrease}
            disabled={product.quantity === 1}
          >
            -
          </button>
          <span className="mx-3 text-zinc-900">{product.quantity}</span>
          <button
            className="bg-emerald-700 text-white  px-4 py-1 rounded-md"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg text-zinc-900 font-bold">
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
