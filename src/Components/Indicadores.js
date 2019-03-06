import React from "react";
import Card from "./Card";
import AgtsGrafico from "./AgtsGrafico";
import utils from "../functions";
import NsGrafico from "./NsGrafico";
import Fila from "./Fila";
import Indicator from "./indicator";

const Indicadores = props => {
  const AgtsDisponiveis = utils.maximo(props.grupos, "AgtsDisponiveis");
  const AgtsPAUSA = utils.maximo(props.grupos, "AgtsPAUSA");
  const AgtsFalando = utils.somar(props.grupos, "AgtsFalando");

  return (
    <div className="col-2 no-gutters flex-column">
      <Card>
        <h2 className="card-title mb-0">
          <Fila {...props} />
        </h2>
      </Card>
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
      <div className="row no-gutters">
        <Card col="6">
          <Indicator indicador="TMA" valor={utils.tmaGeral(props.grupos)} />
        </Card>
        <Card col="6">
          <Indicator indicador="TME" valor={utils.tmeGeral(props.grupos)} />
        </Card>
      </div>
    </div>
  );
};

export default Indicadores;
