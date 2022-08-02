import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import {
  getArtists,
  setSelectedArtist,
  removeArtists
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

  // const handleBackspace = (valueToQueryFor) => {
  //   props.removeArtists(artists, valueToQueryFor)
  // }

  return (
    <div className="headerThird">
      <TextField
      // working on way to refilter on backspace but api is kinda strange. only returns one artist for every key stroke inputted where other apis would return a list of artists that included the query instead of only one.

      //  onKeyDown={(e) => {
      //   if (e.key === 'Backspace') {
      //     var valueToQueryFor = e.target.value.slice(0, e.target.value.length -1)
      //     handleBackspace(valueToQueryFor)
      //   }
      // }}
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
              className='individualResult'
                onClick={() => handleSelect(a)}
                key={index}
              >
                <img
                className='individualResultImg'
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
                  <span className='individualResultFollowers'>
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
    // removeArtists: (artists, valueToQueryFor) => dispatch(removeArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
