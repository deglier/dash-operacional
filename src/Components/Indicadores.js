import React from "react";
import Card from "./Card";
import AgtsGrafico from "./AgtsGrafico";
import utils from "../functions";
import NsGrafico from "./NsGrafico";
import Fila from "./Fila";

const Indicadores = props => {
  const AgtsDisponiveis = utils.maximo(props.grupos, "AgtsDisponiveis");
  const AgtsPAUSA = utils.maximo(props.grupos, "AgtsPAUSA");
  const AgtsFalando = utils.somar(props.grupos, "AgtsFalando");

  return (
    <div className="col-2 no-gutters flex-column">
      <Card>
        <NsGrafico {...props} />
      </Card>
      <Card>
        <AgtsGrafico
          AgtsDisponiveis={AgtsDisponiveis}
          AgtsPAUSA={AgtsPAUSA}
          AgtsFalando={AgtsFalando}
        />
      </Card>
    </div>
  );
};

export default Indicadores;
