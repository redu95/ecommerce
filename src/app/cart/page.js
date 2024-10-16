// src/app/cart/page.js
'use client';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../context/AppContext';
import styles from './cart.module.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useAppContext(); // Import updateQuantity
  const router = useRouter();

  const handleQuantityChange = (id, delta) => {
    const product = cart.find((item) => item.id === id);
    const newQuantity = Math.max((product.quantity || 1) + delta, 0); // Ensure quantity is non-negative
    updateQuantity(id, newQuantity);
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className="text-2xl font-bold mt-10 mb-6 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cart.map((item) => (
            <div key={item.id} className="cart-item border p-4 rounded-lg flex justify-between items-center">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div className="ml-4">
                  <h3 className="font-bold">{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="text-green-600 font-bold">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="bg-gray-300 text-black px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      readOnly
                      className="mx-2 w-16 text-center border"
                    />
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="bg-gray-300 text-black px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="bg-green-200 text-white px-4 py-2 rounded hover:bg-green-300"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-center mt-6">
            <button
              onClick={handleCheckout}
              className="text-white hover:outline-none hover:bg-green-600 bg-green-500 transition duration-300 ease-out px-4 py-2 rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
