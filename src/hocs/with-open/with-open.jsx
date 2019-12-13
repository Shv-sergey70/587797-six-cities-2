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

    render() {
      const {
        isOpen
      } = this.state;

      return <Component
        {...this.props}
        isOpen={isOpen}
        onOpenStateChange={this._handleOpenStateChange}
      />;
    }

    _handleOpenStateChange(isOpen) {
      this.setState({
        isOpen
      });
    }
  }

  return WithOpen;
};

export {withOpen};
