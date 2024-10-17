"use client"; // Marking the component as a Client Component

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CartIcon from './components/CartIcon';
import { useAppContext } from './context/AppContext';
import { products } from './data/product';


export default function Layout({ children }) {

  const [cart, setCart] = useState([]);
  const router = useRouter();

  const { addToCart, cartCount } = useAppContext();

  useEffect(() => {
    // Check if the 'auth-token' cookie exists
    
    // const token = document.cookie.split('; ').find(row => row.startsWith('auth-token='));
    const token = localStorage.getItem('auth-token');
    console.log("token", token )
    if (!token) {
      router.push('/login'); // Redirect to signup if no token
    }
  }, [router]);

  return (
    <div>
      {/* Navbar Section */}
      <div className="pt-3 mt-3 z-10 navbar mx-auto px-4 flex items-center justify-around">
        <div className="flex items-center space-x-6 ">
          <div className="flex items-center space-x-1">
            <img className="logo" src="images/logo.png" alt="Product Image" />
            <span className="text-xl font-semibold text-green-600">Romlina</span>
          </div>
          <nav className=" flex justify-between ">
            <div className='hidden md:flex space-x-4 '>
              <select className="categories hover:text-green-600" defaultValue="en">
                <option value="en">Categories</option>
                <option value="el">Electronics</option>
                <option value="fa">Fashion</option>
                <option value="hg">Home & Garden</option>
              </select>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Deals</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">What's New</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Delivery</a>
            </div>
            <div className='  ml-80'>
              <CartIcon cartCount={cartCount} /> {/* Use the CartIcon component */}
            </div>
            
          </nav>
        </div>
      </div>
    <div className="container">

      {/* Banner Section */}
      <div className="mt-24 banner grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 mt-12 text-left">
          <h1 className="text-2xl font-extrabold">Grab Up to 50% Off On <br /> Selected Headphones</h1>
          <p className="mt-4 text-gray-500 text-md text-black">Discover our exclusive deals on a wide range of headphones. Hurry up before the offer ends!</p>
          <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-bold">Shop Now</button>
        </div>
        <div className="col-span-1 m-0 p-0">
          <img src="/images/headset-enjoy.png" alt="Headphones" className="w-full h-auto headset-enjoy" />
        </div>
      </div>

      {/* Product grid section */}
      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
              <div className="col-span-2 text-left">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="star-rating flex w-20">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-green-500" />
                  ))}
                  {product.rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} className="text-green-500" />}
                  {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={farStar} className="text-gray-400" />
                  ))}
                </div>
              </div>
              <div className="col-span-1 m-0 p-0">
                <p className="price">${product.price}</p>
              </div>
            </div>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
