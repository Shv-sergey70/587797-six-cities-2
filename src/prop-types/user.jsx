import PropTypes from "prop-types";

export default PropTypes.exact({
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired
});
