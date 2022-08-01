import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import axios from 'axios'
import { setRestaurantData, selectRestaurant } from '../store/actions/restaurantActions.jsx'
import GoogleMap from './GoogleMap.jsx'



const ProductView = (props) => {
  const { restaurantSelected } = props
  console.log('restaurantSelected', restaurantSelected)


  return (
    <div className='productDetailMainDiv' >
      <GoogleMap restaurantSelected={restaurantSelected} />
      {/* <div className='mockmapdiv' style={{ height: "60%", backgroundColor: "yellow" }}></div> */}
      <div className='productViewRestaurantNameDiv'>
        <h1 style={{margin: "0px"}}>
          {restaurantSelected.name}
        </h1>
        <p>
          {restaurantSelected.category}
        </p>
      </div>

      <div className='locationAndContactDetailsDiv'>
        <span>{restaurantSelected.location.address}</span>

        <span style={{ marginBottom: "20px" }}>{restaurantSelected.location.city + ', ' + restaurantSelected.location.state + ' ' + restaurantSelected.location.postalCode}</span>

        {restaurantSelected.contact ? (
          <span style={{ marginBottom: "20px" }}>{"(" + restaurantSelected.contact.phone.slice(0, 3) + ") " + restaurantSelected.contact.phone.slice(3, 6) + '-' + restaurantSelected.contact.phone.slice(6)}</span>
        ) : (
          <span style={{ marginBottom: "20px" }}>
            No Contact Information Available.
          </span>
        )}

        {restaurantSelected.contact ? (
          <span style={{ marginBottom: "20px" }}>{"@" + restaurantSelected.contact.twitter}</span>
        ) : (
          <span style={{ marginBottom: "20px" }}>
            No Twitter Information Available.
          </span>
        )}
      </div>


    </div>
  )
}



const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);