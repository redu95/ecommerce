import { faStarHalfAlt, faStar as farStar } from '@fortawesome/free-regular-svg-icons'; // For half and empty stars
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StarRating = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div className="star-rating">
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-green-500" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-green-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={farStar} className="text-gray-400" />
        ))}
      </div>
    );
  };
  