const artists = []
const selectedArtist = null


export const initState = {
  artists
}


export default (state = initState, action) => {
  switch (action.type) {
    case "SET_ARTISTS":
      var toReturn = {...state}
      var artistCopy = [...toReturn.artists, action.data]
      var sortedArtists = artistCopy.sort((a, b) => (a.tracker_count > b.tracker_count) ? -1 : 1)
      console.log('sortedArtists', sortedArtists)
      toReturn.artists = sortedArtists
      return toReturn

      case "SET_SELECTED_ARTIST":
        var toReturn = {...state}
        toReturn.selectedArtist = action.selectedArtist
        toReturn.artists = []
        return toReturn

      case "RESET_ARTISTS":
        var toReturn = {...state}
        toReturn.artists = []
        return toReturn

    default:
      return state
  }
}

