import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// app/page.js
export default function HomePage() {
  return (
    <div className="container">
      {/* Banner Section */}
      <div className="banner grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* <div className=""> */}
          <div className="col-span-2 mt-12 text-left">
            <h1 className="text-2xl font-extrabold">Grab Up to 50% Off On <br/> Selected Headphones</h1>
            <p className="mt-4 text-gray-500 text-md text-black">Discover our exclusive deals on a wide range of headphones. Hurry up before the offer ends!</p>
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-bold">
              Shop Now
            </button>
          </div>
          <div className="col-span-1 m-0 p-0">
            <img src="/images/headset-enjoy.png" alt="Left Image"  className="w-full h-auto headset-enjoy" />
          </div>
        {/* </div> */}
      </div>

      {/* Product Grid */}
      <div className="grid">
        {/* Product 1 */}
        <div className="product-card">
          <img className="product-image" src="images/airpod.png" alt="Product Image" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
            <div className="col-span-2 text-left">
              <h3>Wireless Earbuds</h3>
              <p className='product-description'>White, Bluetooth, LED</p>
              {/* Star Rating */}
              <div className="star-rating flex w-20">
                {/* Full stars */}
                {[...Array(Math.floor(5))].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-green-500" />
                ))}

                {/* Half star */}
                {5 % 1 !== 0 && (
                  <FontAwesomeIcon icon={faStarHalfAlt} className="text-green-500" />
                )}

                {/* Empty stars */}
                {[...Array(5 - Math.ceil(5))].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={farStar} className="text-gray-400" />
                ))}
              </div>

            </div>
            <div className="col-span-1 m-0 p-0">
              <p className='price'>$29.99</p>
            </div>
          </div>
          <button>Add to Cart</button>
        </div>


        {/* Product 2 */}
        <div className="product-card">
          <img className="product-image" src="images/pink.png" alt="Product Image" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
            <div className="col-span-2 text-left">
              <h3>Alpha Headphones</h3>
              <p className='product-description'>Big, Stereo, High Quality</p>
              {/* Star Rating */}
              <div className="star-rating flex w-20">
                {/* Full stars */}
                {[...Array(Math.floor(4.5))].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-green-500" />
                ))}

                {/* Half star */}
                {4.5 % 1 !== 0 && (
                  <FontAwesomeIcon icon={faStarHalfAlt} className="text-green-500" />
                )}

                {/* Empty stars */}
                {[...Array(5 - Math.ceil(4.5))].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={farStar} className="text-gray-400" />
                ))}
              </div>

            </div>
            <div className="col-span-1 m-0 p-0">
              <p className='price'>$29.99</p>
            </div>
          </div>
          <button>Add to Cart</button>
        </div>

        {/* Product 3 */}
        <div className="product-card">
          <img className="product-image" src="images/black.png" alt="Product Image" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
            <div className="col-span-2 text-left">
              <h3>BE11 Earphones</h3>
              <p className='product-description'>Black, Stereo, High Quality</p>
              {/* Star Rating */}
              <div className="star-rating flex w-20">
                {/* Full stars */}
                {[...Array(Math.floor(4.5))].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-green-500" />
                ))}

                {/* Half star */}
                {4.5 % 1 !== 0 && (
                  <FontAwesomeIcon icon={faStarHalfAlt} className="text-green-500" />
                )}

                {/* Empty stars */}
                {[...Array(5 - Math.ceil(4.5))].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={farStar} className="text-gray-400" />
                ))}
              </div>

            </div>
            <div className="col-span-1 m-0 p-0">
              <p className='price'>$59.99</p>
            </div>
          </div>
          <button>Add to Cart</button>
        </div>

        {/* Product 4 */}
        <div className="product-card">
          <img className="product-image" src="images/airpod.png" alt="Product Image" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
            <div className="col-span-2 text-left">
              <h3>VR200 Headphones</h3>
              <p className='product-description'>Black, Stereo, High Quality</p>
              {/* Star Rating */}
              <div className="star-rating flex w-20">
                {/* Full stars */}
                {[...Array(Math.floor(4.5))].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-green-500" />
                ))}

                {/* Half star */}
                {4.5 % 1 !== 0 && (
                  <FontAwesomeIcon icon={faStarHalfAlt} className="text-green-500" />
                )}

                {/* Empty stars */}
                {[...Array(5 - Math.ceil(4))].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={farStar} className="text-gray-400" />
                ))}
              </div>

            </div>
            <div className="col-span-1 m-0 p-0">
              <p className='price'>$79.99</p>
            </div>
          </div>
          <button>Add to Cart</button>
        </div>

        {/* Add more product placeholders as needed */}
      </div>
    </div>
  )
}
