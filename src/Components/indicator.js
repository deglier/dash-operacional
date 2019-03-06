import React from "react";
import utils from "../functions";

const Indicator = ({ indicador, valor, bigger }) => {
  return (
    <React.Fragment>
      <p className="mb-0">{indicador}</p>
      {bigger ? (
        <h4 className="mb-0">{utils.SecToHora(valor)}</h4>
      ) : (
        <h6 className="mb-0 text-bold">{utils.SecToHora(valor)}</h6>
      )}
    </React.Fragment>
  );
};

export default Indicator;
