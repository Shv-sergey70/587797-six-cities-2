import React from 'react';
import PropTypes from 'prop-types';
import Card, {offerPropTypes} from "../card/card";

export class OffersList extends React.PureComponent {
  render() {
    const {
      offers,
      changeActiveItem
    } = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <Card
        key = {`card=${i}`}
        offer = {offer}
        onTitleClick={() => {}}
        onCardClick = {changeActiveItem}
      />)}
    </div>;
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  activeItem: PropTypes.number.isRequired,
  changeActiveItem: PropTypes.func.isRequired
};
