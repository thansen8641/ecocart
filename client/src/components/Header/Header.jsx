import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar.jsx";
import logo from "./bandintownlogo.png";
import SignupLogin from "./SignupLogin.jsx";

const Header = (props) => {
  const {} = props;

  return (
    <div className="headerMain">
      <div className="headerThird">
        <img className="brandLogo" src={logo} />
      </div>
      <SearchBar />
      <SignupLogin />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataLoaded: state.artist.dataLoaded,
    artist: state.artist.artist,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
