import React from 'react';
import { combineReducers } from 'redux'
import artistReducer from './artistReducer.jsx'

export default combineReducers({
  artist: artistReducer,
});
