import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import axios from 'axios'
import { setRestaurantData, selectRestaurant } from '../store/actions/restaurantActions.jsx'
import loader from '../../dist/loader.gif'


const ProductList = (props) => {
  const { dataLoaded, restaurants, setRestaurantData, selectRestaurant } = props
  const [data, setData] = useState([])

  useEffect(() => {
    if (!dataLoaded) {
      axios.get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
        .then((response) => {
          setRestaurantData(response.data)
        })
        .catch((err) => {
          console.log('error getting data', err)
        })
    }

  }, [])


  useEffect(() => {
    if (restaurants) {
      setData(restaurants.restaurants)
    }
  }, [restaurants])


  // AIzaSyBFXuyAJXgU2_7ydtTmjKpSlK8R34mt0m0
  return (
    dataLoaded ? (
      <div className='productListMainDiv' >

        {data && data.map((restaurant, index) => (
          <div onClick={() => selectRestaurant(restaurant)} key={index}
            className='singleProductDiv'>
            <div className='productListHeaderDetails'>
              <div className='productListRestaurantDetail'>
                <h1 className='productListRestaurantName'>
                  {restaurant.name}
                </h1>
                <p style={{ fontWeight: 600 }}>
                  {restaurant.category}
                </p>
              </div>
            </div>
            <img className='productListImage' src={restaurant.backgroundImageURL} />
          </div>
        ))}
      </div>
    ) : (
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img style={{ height: "30%" }} src={loader} />
      </div>
    )

  )
}



const mapStateToProps = (state) => {
  return {
    dataLoaded: state.restaurants.dataLoaded,
    restaurants: state.restaurants.restaurants
  };
};

const mapDispatchToProps = (dispatch) => ({
  setRestaurantData: (data) => dispatch(setRestaurantData(data)),
  selectRestaurant: (restaurantSelected) => dispatch(selectRestaurant(restaurantSelected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);