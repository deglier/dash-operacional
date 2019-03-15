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
        <h2 className="display-4 mb-0">
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
      {!props.isFila ? (
        <React.Fragment>
          <Card>
            <Indicator
              indicador="TMA"
              bigger
              valor={utils.tmaGeral(props.grupos)}
            />
          </Card>
          <Card>
            <Indicator
              indicador="TME"
              bigger
              valor={utils.tmeGeral(props.grupos)}
            />
          </Card>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Card>
            <Indicator
              indicador="Cham. Mais Antiga"
              bigger
              valor={utils.gruposByMaisAntiga(props.grupos)}
            />
          </Card>
          <div className="row no-gutters mb-1 bg-white">
            <div className="col text-center pt-1 pb-1">
              <Indicator indicador="TMA" valor={utils.tmaGeral(props.grupos)} />
            </div>
            <div className="col text-center pt-1 pb-1">
              <Indicator indicador="TME" valor={utils.tmeGeral(props.grupos)} />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Indicadores;
