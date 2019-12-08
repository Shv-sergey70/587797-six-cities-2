import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const PageHeader = (props) => {
  const {
    authData
  } = props;

  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to='/' className={`header__logo-link`}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              {authData.email === undefined
                ? (<Link to='/login' className={`header__nav-link header__nav-link--profile`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </Link>)
                : (<Link to='/favorite' className={`header__nav-link header__nav-link--profile`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{authData.email}</span>
                </Link>)}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

PageHeader.propTypes = {
  authData: PropTypes.object // Тогда поправить на строку
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  authData: state.authData // Попробовать извлекаить селектором только почту
});

export {PageHeader};

export default connect(mapStateToProps)(PageHeader);
