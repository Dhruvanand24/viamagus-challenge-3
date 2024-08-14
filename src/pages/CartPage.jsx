import React, { useState, useEffect } from "react";
import { productList } from "../constants/products";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const [cart, setCart] = useState(productList);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cart, discount]);

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart(
      cart.map((product) =>
        product.id === id
          ? { ...product, quantity: parseInt(quantity) }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const applyDiscount = (event) => {
    const discountValue = event.target.value;
    if (discountValue >= 0 && discountValue <= 100) {
      setDiscount(discountValue);
    }
  };

  const calculateTotal = () => {
    const totalAmount = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(totalAmount - (totalAmount * discount) / 100);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-b text-emerald-900 from-emerald-300 to-emerald-200 rounded-xl shadow-xl space-y-6 sm:py-8 w-full h-full">
      <h1 className="text-4xl text-emerald-950 font-extrabold text-center mb-8">
        Your Shopping Cart
      </h1>
      <ul className="space-y-4">
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            updateQuantity={updateQuantity}
            removeProduct={removeProduct}
          />
        ))}
      </ul>
      <div className="flex justify-between items-center mt-8">
        <label className="block text-lg font-semibold">Discount (%):</label>
        <input
          type="number"
          value={discount}
          min="0"
          max="100"
          className="border-2 border-white bg-transparent p-2 w-20 rounded-lg text-center text-lg font-semibold"
          onChange={applyDiscount}
        />
      </div>
      <div className="text-2xl text-emerald-950 font-extrabold text-right mt-6">
        Total: ₹{total.toFixed(2)}
      </div>
    </div>
  );
};

export default CartPage;
