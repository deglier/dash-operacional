import React from "react";

const NeoSpinner = props => {
  return (
    <div className={"neoSpinner-wrapper" + (props.hide ? " is-hide" : "")}>
      <svg
        id="neoSpinner"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="63.333px"
        height="73.333px"
        viewBox="0 0 63.333 73.333"
      >
        <polygon
          className="neoSpinner-line"
          points="4.701,21.098 4.701,52.235 31.667,67.804 58.632,52.235 58.632,21.098 31.667,5.529 "
        />
      </svg>
      <p className="neoSpinner-text">Carregando</p>
    </div>
  );
};

export default NeoSpinner;
