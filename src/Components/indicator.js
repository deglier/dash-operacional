import React from "react";
import utils from "../functions";

const Indicator = ({ indicador, valor }) => {
  return (
    <React.Fragment>
      <p className="mb-0">{indicador}</p>
      <h5 className="mb-0">{utils.SecToHora(valor)}</h5>
    </React.Fragment>
  );
};

export default Indicator;
