import React from 'react';
import PropTypes from "prop-types";
import {withOpen} from "./with-open";

const TestComponent = (props) => {
  const {
    openStateChange
  } = props;

  return <div onClick={() => {
    openStateChange(true);
  }}>TEST</div>;
};

TestComponent.propTypes = {
  openStateChange: PropTypes.func.isRequired
};

export {TestComponent};
export default withOpen(TestComponent);
