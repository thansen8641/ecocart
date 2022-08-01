import React from 'react';
import { combineReducers } from 'redux'
import restaurantReducer from './restaurantReducer.jsx'

export default combineReducers({
  restaurants: restaurantReducer
});
