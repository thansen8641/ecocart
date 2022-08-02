import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { MdVerifiedUser } from "react-icons/md";

const HeroCard = (props) => {
  const { selectedArtist } = props;

  if (!selectedArtist) {
    return null;
  }

  return (
    <div
      className="heroMain"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${selectedArtist.image_url}) no-repeat center / cover`,
      }}
    >
      <div className='artistNameAndImage'>
        <img
        className='heroImg'
          src={selectedArtist.image_url}
        />
        <div
          className='artistNameAndFollowers'
        >
          <h1
          className='artistName'
          >
            {selectedArtist.name} <MdVerifiedUser style={{ fill: "#00b4b3" }} />
          </h1>
          <div>
            <span className='artistInfo'>{selectedArtist.tracker_count + " Followers"}</span>
            {selectedArtist.upcoming_event_count > 0 ? (
              <span className='artistInfo'>
                {"• " + selectedArtist.upcoming_event_count + " Upcoming Shows"}
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <button
      className='followBtn'
      >
        Follow
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedArtist: state.artist.selectedArtist,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeroCard);
