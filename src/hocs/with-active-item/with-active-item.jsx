import React from 'react';
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      const {defaultActiveItem} = this.props;

      this.state = {
        activeItem: defaultActiveItem
      };

      this._changeActiveItem = this._changeActiveItem.bind(this);
    }

    componentDidUpdate() {
      const {defaultActiveItem} = this.props;

      this.setState({
        activeItem: defaultActiveItem
      });
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        changeActiveItem={this._changeActiveItem}
      />;
    }

    _changeActiveItem(activeItem) {
      this.setState({
        activeItem
      });
    }
  }

  WithActiveItem.propTypes = {
    defaultActiveItem: PropTypes.any
  };

  return WithActiveItem;
};

export {withActiveItem};
