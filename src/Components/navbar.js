import React from "react";
import Logo from "./logo";

const NavBar = props => {
  const { titulo } = props;
  return (
    <nav className="row mb-2" style={{ backgroundColor: "#fff" }}>
      <span className="col">
        <Logo who="neo" color="rgb(15,98,172)" width="75px" height="40px" />
      </span>
      <span
        className="col-9"
        style={{
          flexGrow: 1,
          textAlign: "center",
          paddingTop: "8px",
          fontWeight: "bold"
        }}
      >
        <span>{titulo}</span>
      </span>
      <span className="col">
        <Logo who="gab" color="rgb(15,98,172)" width="150px" height="40px" />
      </span>
    </nav>
  );
};

export default NavBar;
