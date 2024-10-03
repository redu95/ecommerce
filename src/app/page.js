import Image from "next/image";

// app/page.js
export default function HomePage() {
  return (
    <div className="container">
      {/* Banner Section */}
      <div className="banner">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 mt-12">
            <h1 className="text-2xl font-bold">Grab Up to 50% Off On Selected Headphones</h1>
            <p className="mt-4 text-lg text-black">Discover our exclusive deals on a wide range of headphones. Hurry up before the offer ends!</p>
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Shop Now
            </button>
          </div>
          <div className="col-span-1">
            <img src="/images/headset-enjoy.png" alt="Left Image" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid">
        {/* Product 1 */}
        <div className="product-card">
          <img src="images/airpod.png" alt="Product Image" />
          <h3>Wireless Earbuds</h3>
          <p>$29.99</p>
          <button>Add to Cart</button>
        </div>

        {/* Product 2 */}
        <div className="product-card">
          <img src="images/pink.png" alt="Product Image" />
          <h3>Alpha Headphones</h3>
          <p>$59.99</p>
          <button>Add to Cart</button>
        </div>

        {/* Product 3 */}
        <div className="product-card">
          <img src="images/black.png" alt="Product Image"/>    
           <h3>BE11 Earphones</h3>
          <p>$19.99</p>
          <button>Add to Cart</button>
        </div>

        {/* Product 4 */}
        <div className="product-card">
          <img src="images/airpod.png" alt="Product Image" className="w-full h-auto" />         
          <h3>VR200 Headphones</h3>
          <p>$79.99</p>
          <button>Add to Cart</button>
        </div>

        {/* Add more product placeholders as needed */}
      </div>
    </div>
  )
}
