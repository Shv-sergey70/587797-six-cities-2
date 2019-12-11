import PropTypes from "prop-types";
import locationPropTypes from './location';

export default PropTypes.exact({
  name: PropTypes.string,
  location: locationPropTypes
});
