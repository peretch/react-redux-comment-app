import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PropTypes from 'prop-types';
import reducers from './reducers';

const Root = ({ children }) => (
  <Provider store={createStore(reducers, {})}>{children}</Provider>
);

Root.propTypes = {
  children: PropTypes.any,
};

export default Root;
