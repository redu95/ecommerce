// src/app/checkout/page.js
'use client';

import { useRouter } from 'next/navigation';
import { useAppContext } from '../context/AppContext';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  const { cart } = useAppContext(); // Get cart from AppContext
  const router = useRouter();

  // Calculate total price for each product (price * quantity)
  const calculateTotalPrice = (item) => item.price * item.quantity;

  // Calculate the grand total for the entire cart
  const grandTotal = cart.reduce((total, item) => total + calculateTotalPrice(item), 0);

  const handlePlaceOrder = () => {
    alert('Order placed successfully! Thank you for your purchase.');
    // Clear cart or redirect logic can go here
    router.push('/'); // Redirect to homepage after order
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add some items to proceed.</p>
      ) : (
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-semibold">${calculateTotalPrice(item).toFixed(2)}</p>
              </div>
            ))}
            <div className="flex justify-between mt-4 font-bold text-lg">
              <span>Total:</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="text-center mt-6">
            <button
              onClick={handlePlaceOrder}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
