import React, { useEffect, useState } from "react";

const SignupLogin = (props) => {
  const {} = props;

  return (
    <div
      style={{
        width: "33%",
        display: "flex",
        // alignItems: "center",
        justifyContent: "end",
      }}
    >
      <span style={{ fontWeight: "bold", color: "#08C3BA", margin: "0px 30px", fontSize: "22px" }}>Signup</span>
      <span  style={{ fontWeight: "bold", color: "#08C3BA", margin: "0px 30px",  fontSize: "22px"}}>Login</span>
    </div>
  );
};

export default SignupLogin;
