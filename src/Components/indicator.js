import React from "react";
import utils from "../functions";

const Indicator = ({ indicador, valor, bigger }) => {
  return (
    <React.Fragment>
      <p className="mb-0">{indicador}</p>
      {bigger ? (
        <h4 className="mb-0">{utils.SecToHora(valor)}</h4>
      ) : (
        <h5 className="mb-0">{utils.SecToHora(valor)}</h5>
      )}
    </React.Fragment>
  );
};

export default Indicator;
