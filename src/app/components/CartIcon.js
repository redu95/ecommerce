// src/app/components/CartIcon.js
'use client';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useAppContext } from '../context/AppContext'; // Use AppContext directly

export default function CartIcon() {
  const { cartCount } = useAppContext(); // Get cartCount from context

  return (
    <div className="relative">
      <Link href="/cart">
        <FontAwesomeIcon icon={faShoppingCart} color="#324343" size="lg" />
        {cartCount > 0 && (
          <span className="absolute top-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
}
