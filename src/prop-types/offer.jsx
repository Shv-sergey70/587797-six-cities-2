import PropTypes from "prop-types";
import cityPropTypes from "./city";
import userPropTypes from "./user";
import locationPropTypes from './location';

export default PropTypes.exact({
  id: PropTypes.number.isRequired,
  city: cityPropTypes,
  previewImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  goods: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  host: userPropTypes,
  description: PropTypes.string.isRequired,
  location: locationPropTypes
}).isRequired;
