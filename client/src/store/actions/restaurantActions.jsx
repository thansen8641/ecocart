/*eslint-disable*/
import React from 'react'



export const setRestaurantData = (data) => {
  return {
    type: "SET_RESTAURANT_DATA",
    data
  }
}

export const selectRestaurant = (restaurantSelected) => {
  return {
    type: "SET_RESTAURANT_SELECTED",
    restaurantSelected
  }
}