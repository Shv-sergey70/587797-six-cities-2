import React from 'react';
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class withActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(props.question.answers.length).fill(false)
      };

      this._handleAnswerClick = this._handleAnswerClick.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        onAnswerClick = {this._handleAnswerClick}
        onFormSubmit = {this._handleFormSubmit}
      />;
    }

    _handleAnswerClick(answerNumber) {
      const stateCopy = Object.assign({}, this.state);
      stateCopy.answers[answerNumber] = !stateCopy.answers[answerNumber];

      this.setState(stateCopy);
    }

    _handleFormSubmit() {
      this.props.onAnswer(Object.values(this.state.answers), this.props.question, this.props.mistakes, this.props.maxMistakes);
    }
  }

  WithUserAnswers.propTypes = {
    mistakes: PropTypes.number.isRequired,
    maxMistakes: PropTypes.number.isRequired,
    onAnswer: PropTypes.func.isRequired,
    question: PropTypes.exact({
      type: PropTypes.oneOf([`genre`]),
      genre: PropTypes.oneOf([`Pop`, `Classic`, `Jazz`, `Country`]),
      answers: PropTypes.arrayOf(PropTypes.exact({
        src: PropTypes.string,
        genre: PropTypes.string
      }))
    }).isRequired
  };

  return WithUserAnswers;
};

export {withUserAnswers};
