import React from 'react';

const withOpen = (Component) => {
  class WithOpen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this._handleOpenStateChange = this._handleOpenStateChange.bind(this);
    }

    _handleOpenStateChange(isOpen) {
      this.setState({
        isOpen
      });
    }

    render() {
      const {
        isOpen
      } = this.state;

      return <Component
        {...this.props}
        isOpen={isOpen}
        openStateChange={this._handleOpenStateChange}
      />;
    }
  }

  return WithOpen;
};

export {withOpen};
