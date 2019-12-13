import React from 'react';
import PropTypes from 'prop-types';
import Operation from "../../operation";
import {connect} from "react-redux";
import history from "../../history";
import {Redirect} from 'react-router-dom';
import {Route} from "../../const/routes";
import PageHeader from "../page-header/page-header";
import Selectors from '../../selector';
import notifier from "../../notifier";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleSignInButtonClick = this._handleSignInButtonClick.bind(this);
  }

  render() {
    const {
      email,
      password,
      onInputKeydown,
      isAuth
    } = this.props;

    if (isAuth) {
      return <Redirect to={Route.MAIN} />;
    }

    return <div className="page page--gray page--login">
      <PageHeader/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" defaultValue={email} onChange={onInputKeydown}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" defaultValue={password} onChange={onInputKeydown}/>
              </div>
              <button className="login__submit form__submit button" type="submit" onClick={this._handleSignInButtonClick}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>;
  }

  _handleSignInButtonClick(evt) {
    evt.preventDefault();

    const {
      email,
      password,
      authorize
    } = this.props;

    try {
      if (email.length === 0) {
        throw new Error(`Email is empty`);
      } else if (password.length === 0) {
        throw new Error(`Password is empty`);
      }

      authorize(email, password);
      history.push(Route.MAIN);
    } catch (e) {
      notifier.error(e.message);
    }
  }
}

SignIn.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onInputKeydown: PropTypes.func.isRequired,
  authorize: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuth: Selectors.isUserAuthorized(state)
});

const mapDispatchToProps = (dispatch) => ({
  authorize: (email, password) => dispatch(Operation.authorize(email, password))
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
