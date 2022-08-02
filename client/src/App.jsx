import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'

const App = (props) => {
  const {  } = props

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    dataLoaded: state.artist.dataLoaded,
    artist: state.artist.artist
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);