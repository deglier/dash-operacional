import React from "react";
import utils from "../functions";

const Indicator = ({ indicador, valor, bigger, biggerDouble }) => {
  return (
    <React.Fragment>
      <p className="mb-0">{indicador}</p>
      {bigger ? (
        <h1 className="mb-0">{utils.SecToHora(valor)}</h1>
      ) : biggerDouble ? (
        <h4 className="mb-0">{utils.SecToHora(valor)}</h4>
      ) : (
        <b className="mb-0">{utils.SecToHora(valor)}</b>
      )}
    </React.Fragment>
  );
};

export default Indicator;
