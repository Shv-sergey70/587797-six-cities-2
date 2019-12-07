import React from 'react';

const withAuthForm = (Component) => {
  class WithAuthForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleInputKeydown = this._handleInputKeydown.bind(this);
    }

    render() {
      const {
        email,
        password
      } = this.state;

      return <Component
        {...this.props}
        email={email}
        password={password}
        onInputKeydown={this._handleInputKeydown}
      />;
    }

    _handleInputKeydown(evt) {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }
  }

  return WithAuthForm;
};

export {withAuthForm};
