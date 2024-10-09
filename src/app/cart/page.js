// src/app/cart/page.js
'use client';
import styles from './cart.module.css';
import { useAppContext } from '../context/AppContext';

export default function CartPage() {
  const { cart, removeFromCart } = useAppContext();

  return (
    <div className={styles.cartContainer}>
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
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
                  <p className="text-green-600 font-bold">${item.price}</p>
                </div>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
