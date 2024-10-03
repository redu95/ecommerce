// app/page.js
export default function HomePage() {
  return (
    <div className="container">
      {/* Banner Section */}
      <div className="banner">
        <h1>Grab Up to 50% Off On Selected Headphones</h1>
        <button>Shop Now</button>
      </div>

      {/* Product Grid */}
      <div className="grid">
        {/* Product 1 */}
        <div className="product-card">
          <img src="/placeholder-image.png" alt="Product Image" />
          <h3>Wireless Earbuds</h3>
          <p>$29.99</p>
          <button>Add to Cart</button>
        </div>

        {/* Product 2 */}
        <div className="product-card">
          <img src="/placeholder-image.png" alt="Product Image" />
          <h3>Alpha Headphones</h3>
          <p>$59.99</p>
          <button>Add to Cart</button>
        </div>

        {/* Product 3 */}
        <div className="product-card">
          <img src="/placeholder-image.png" alt="Product Image" />
          <h3>BE11 Earphones</h3>
          <p>$19.99</p>
          <button>Add to Cart</button>
        </div>

        {/* Product 4 */}
        <div className="product-card">
          <img src="/placeholder-image.png" alt="Product Image" />
          <h3>VR200 Headphones</h3>
          <p>$79.99</p>
          <button>Add to Cart</button>
        </div>

        {/* Add more product placeholders as needed */}
      </div>
    </div>
  )
}
