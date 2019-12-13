import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import PageHeader from '../page-header/page-header';
import FavoritesList from "../favorites-list/favorites-list";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import {Link} from "react-router-dom";
import Operation from "../../operation";
import offerPropType from '../../prop-types/offer';
import {Route} from "../../const/routes";

class FavoritesPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this._isEmptyFavorites = this._isEmptyFavorites.bind(this);
  }

  componentDidMount() {
    const {
      loadFavorites
    } = this.props;

    loadFavorites();
  }

  _isEmptyFavorites() {
    const {
      favoriteOffers
    } = this.props;

    return favoriteOffers.length === 0;
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
        <Link to={Route.MAIN} className={`footer__logo-link`}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>;
  }
}

FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.arrayOf(offerPropType),
  loadFavorites: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  favoriteOffers: state.favoriteOffers
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites: () => dispatch(Operation.loadFavorites())
});

export {FavoritesPage};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
