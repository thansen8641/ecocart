import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import {
  getArtists,
  setSelectedArtist,
} from "../../store/actions/artistActions.jsx";
import { MdVerifiedUser } from "react-icons/md";

const SearchBar = (props) => {
  const { artists } = props;
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    props.getArtists(e.target.value, artists);
    setQuery(e.target.value);
  };

  const handleSelect = (selectedArtist) => {
    props.setSelectedArtist(selectedArtist);
    setQuery("");
  };

  return (
    <div className="headerThird">
      <TextField
        className="searchBar"
        onChange={handleSearch}
        variant="outlined"
        placeholder="Search for artists"
        value={query}
        className="searchBar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      {artists.length > 0 ? (
        <div className="queryResults">
          <div className="queryResultsSearchDiv"> Artists </div>
          {artists.map((a, index) => {
            return (
              <div
                onClick={() => handleSelect(a)}
                key={index}
                style={{
                  width: "94%",
                  backgroundColor: "white",
                  display: "flex",
                  padding: "10px",
                }}
              >
                <img
                  style={{
                    width: "50px",
                    borderRadius: "100%",
                    marginRight: "15px",
                  }}
                  src={a.image_url}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    className="searchResultArtistName"
                  >
                    {a.name}
                    {a.tracker_count > 50000 ? (
                      <MdVerifiedUser style={{ fill: "#00b4b3" }} />
                    ) : null}
                  </span>
                  <span style={{ color: "#8F8F8F", fontSize: "15px" }}>
                    {a.tracker_count + " Followers"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    artists: state.artist.artists,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArtists: (query, artists) => dispatch(getArtists(query, artists)),
  setSelectedArtist: (selectedArtist) =>
    dispatch(setSelectedArtist(selectedArtist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
