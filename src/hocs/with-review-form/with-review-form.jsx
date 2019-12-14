import React from 'react';

const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        review: ``,
        rating: null
      };

      this._handleCommentTextareaChange = this._handleCommentTextareaChange.bind(this);
      this._handleRatingInputClick = this._handleRatingInputClick.bind(this);
      this._resetForm = this._resetForm.bind(this);
    }

    render() {
      const {
        review,
        rating
      } = this.state;

      return <Component
        {...this.props}
        review={review}
        rating={rating}
        onCommentChange={this._handleCommentTextareaChange}
        onRatingClick={this._handleRatingInputClick}
        resetForm={this._resetForm}
      />;
    }

    _handleCommentTextareaChange(evt) {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }

    _handleRatingInputClick(evt) {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }

    _resetForm() {
      this.setState({
        review: ``,
        rating: null
      });
    }
  }

  return WithReviewForm;
};

export {withReviewForm};
