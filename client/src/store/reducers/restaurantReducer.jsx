const restaurants = []
const dataLoaded = false
const restaurantSelected = false


export const initState = {
  restaurants,
  dataLoaded,
  restaurantSelected
}


export default (state = initState, action) => {
  switch (action.type) {
    case "SET_RESTAURANT_DATA":
      var toReturn = {...state}
      toReturn.restaurants = action.data
      toReturn.dataLoaded = true
      return toReturn

    case "SET_RESTAURANT_SELECTED":
      var toReturn = {...state}
      toReturn.restaurantSelected = action.restaurantSelected
      return toReturn

    default:
      return state
  }
}

