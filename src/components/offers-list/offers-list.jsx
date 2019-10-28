import React from 'react';
import PropTypes from 'prop-types';
import {Card, offerPropTypes} from "../card/card";

export class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._onCardHover = this._onCardHover.bind(this);
  }

  render() {
    const {offers} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <Card
        key = {`card=${i}`}
        offer = {offer}
        onTitleClick={() => {}}
        onCardHover = {this._onCardHover}
      />)}
    </div>;
  }

  _onCardHover(activeCardData) {
    this.setState(() => {
      return {activeCard: activeCardData};
    });
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};
