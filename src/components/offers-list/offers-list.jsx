import React from 'react';
import PropTypes from 'prop-types';
import Card from "../card/card";
import offerPropTypes from '../../prop-types/offer';
import ActionCreator from "../../action-creator";
import {connect} from "react-redux";

class OffersList extends React.PureComponent {
  render() {
    const {
      offers,
      changeActiveOffer
    } = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card
        key={`card-${offer.id}-${offer.isFavorite}`}
        offer={offer}
        changeActiveOffer={changeActiveOffer}
      />)}
    </div>;
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  changeActiveOffer: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveOffer: (offerId) => dispatch(ActionCreator.changeActiveOffer(offerId))
});

export {OffersList};

export default connect(null, mapDispatchToProps)(OffersList);

