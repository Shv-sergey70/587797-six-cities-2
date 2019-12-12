import React from 'react';

const withOpen = (Component) => {
  class WithOpen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this.toggleOpenState = this.toggleOpenState.bind(this);
    }

    render() {
      const {
        isOpen
      } = this.state;

      return <Component
        {...this.props}
        isOpen={isOpen}
        toggleOpenState={this.toggleOpenState}
      />;
    }

    toggleOpenState(isOpen) {
      this.setState({
        isOpen
      });
    }
  }

  return WithOpen;
};

export {withOpen};
