import React, { useState, useEffect } from 'react'
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Loader } from "@googlemaps/js-api-loader"

let map

const loader = new Loader({
  apiKey: "AIzaSyBFXuyAJXgU2_7ydtTmjKpSlK8R34mt0m0",
  version: "weekly",
});

const GoogleMap = (props) => {
  const { restaurantSelected } = props
  const [lat, setLat] = useState(restaurantSelected.location.lat)
  const [long, setLong] = useState(restaurantSelected.location.lng)


  useEffect(() => {
    // console.log('restaurantSelected.location.lat', restaurantSelected.location.lat)
    // setLat(restaurantSelected.location.lat)
    // setLong(restaurantSelected.location.lng)

    if (restaurantSelected.location.lat && restaurantSelected.location.lng) {
      loader.load().then(() => {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: restaurantSelected.location.lat, lng: restaurantSelected.location.lng },
          zoom: 15,
        });

       const marker = new google.maps.Marker({
          position: { lat: restaurantSelected.location.lat, lng: restaurantSelected.location.lng },
          map,
          title: "Restaurant Marker",
        });


        const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        `<h1 id="firstHeading" class="firstHeading">${restaurantSelected.name}</h1>` +
        '<div id="bodyContent">' +
        `<p>Specialty: ${restaurantSelected.category.toLowerCase()}.</p>` +
        "</div>" +
        "</div>";

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });


        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
        });



      });
    }
  }, [restaurantSelected])


  return (
    <div id="map" style={{ height: "95%", zIndex: 3 }}>
    </div>
  )
}


export default GoogleMap;