import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import PageHeader from '../page-header/page-header';
import FavoritesList from "../favorites-list/favorites-list";
import {FavoritesEmpty} from "../favorites-empty/favorites-empty";
import {Link} from "react-router-dom";

class FavoritesPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this._isEmptyFavorites = this._isEmptyFavorites.bind(this);
  }

  render() {
    const {
      favoriteOffers
    } = this.props;

    return <div className={`page ${this._isEmptyFavorites ? `page--favorites-empty` : ``}`}>
      <PageHeader/>

      {this._isEmptyFavorites() ? <FavoritesEmpty/> : <FavoritesList
        favoriteOffers={favoriteOffers}
      />}

      <footer className="footer container">
        <Link to='/' className={`footer__logo-link`}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>;
  }

  _isEmptyFavorites() {
    const {
      favoriteOffers
    } = this.props;

    return favoriteOffers.length === 0;
  }
}

FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.array
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  favoriteOffers: state.favoriteOffers
});

export {FavoritesPage};

export default connect(mapStateToProps)(FavoritesPage);
