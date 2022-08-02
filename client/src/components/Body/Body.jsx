import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import HeroCard from './HeroCard.jsx'

const Body = (props) => {
  const {} = props;

  return (
      <HeroCard />
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
