import React from 'react';
import PropTypes from 'prop-types';
import {SortingType} from "../../const/common";
import {connect} from "react-redux";
import ActionCreator from "../../action-creator";

class Sort extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onMenuClick = this._onMenuClick.bind(this);
    this._getSortDescription = this._getSortDescription.bind(this);
  }

  render() {
    const {
      activeSortingType,
      isOpen
    } = this.props;

    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={this._onMenuClick}>
        {activeSortingType.text}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
        {Object.keys(SortingType).map((sortType) => this._getSortDescription(SortingType[sortType]))}
      </ul>
    </form>;
  }

  _onMenuClick() {
    const {
      isOpen,
      toggleOpenState
    } = this.props;

    toggleOpenState(!isOpen);
  }

  _getSortDescription(sortType) {
    const {
      activeSortingType,
      changeSortingType,
      toggleOpenState
    } = this.props;

    return <li key={sortType.name} className={`places__option ${activeSortingType.name === sortType.name ? `places__option--active` : ``}`} tabIndex="0" onClick={() => {
      changeSortingType(sortType);
      toggleOpenState(false);
    }}>{sortType.text}</li>;
  }
}

Sort.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpenState: PropTypes.func.isRequired,
  activeSortingType: PropTypes.exact({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  changeSortingType: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeSortingType: state.sortingType,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingType: (newSortingType) => dispatch(ActionCreator.changeSortingType(newSortingType)),
});

export {Sort};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);

