import PropTypes from "prop-types";
import userPropTypes from "./user";

export default PropTypes.exact({
  id: PropTypes.number.isRequired,
  user: userPropTypes,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}).isRequired;
