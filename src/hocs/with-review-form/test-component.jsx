import React from 'react';
import PropTypes from "prop-types";
import {withReviewForm} from "./with-review-form";

const TestComponent = (props) => {
  const {
    onCommentChange
  } = props;

  return <div>TEST
    <input onChange={onCommentChange} name={`testName`} value={`testValue`}/>
  </div>;
};

TestComponent.propTypes = {
  onCommentChange: PropTypes.func.isRequired
};

export {TestComponent};
export default withReviewForm(TestComponent);
