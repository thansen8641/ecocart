/*eslint-disable*/
import React from 'react'
import Axios from 'axios'


export const getArtists = (query, artists) => {
  console.log('query', query)
  return (dispatch) => {
    if (!query) {
      dispatch(resetArtists())
    } else {
      var artistIds = artists.map((a) => {
        return a.id
      })
      return Axios.get(`https://rest.bandsintown.com/artists/${query}/?app_id=test`).then((results) => {
        if (results.data.error) {
          console.log('error', error)
        } else {
          if (results.data && !artistIds.includes(results.data.id)) {
            dispatch(setArtists(results.data))
          }
        }
      })
    }
  }
}

export const resetArtists = () => {
  return {
    type: "RESET_ARTISTS",
  }
}

export const setArtists = (data) => {
  return {
    type: "SET_ARTISTS",
    data
  }
}


export const setSelectedArtist = (selectedArtist) => {
  return {
    type: "SET_SELECTED_ARTIST",
    selectedArtist
  }
}
