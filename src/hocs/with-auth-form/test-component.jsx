import React from 'react';
import {withAuthForm} from './with-auth-form.jsx';
import PropTypes from "prop-types";

const TestComponent = (props) => {
  return <div>TEST
    <input onChange={props.onInputKeydown} name={`testName`} value={`testValue`}/>
  </div>;
};

TestComponent.propTypes = {
  onInputKeydown: PropTypes.func.isRequired
};

export {TestComponent};
export default withAuthForm(TestComponent);
