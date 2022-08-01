import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import mapLogo from '../../dist/Cuts/icon_map@2x.png'
import backBtn from '../../dist/Cuts/ic_webBack@2x.png'

const Header = (props) => {
  return (
    <div className='headerMainDiv'>
      {window.screen.width < 1100 ? (
        <img className='headerBtns' src={backBtn} />
      ) : (
        <div style={{ display: "hidden" }}></div>
      )}

      <h1 className='headerText'>
        Lunch Thyme
      </h1>
      <img className='headerBtns' src={mapLogo} />
    </div>
  )
}



const mapStateToProps = (state) => {
  console.log('state', state)
  return {

  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);