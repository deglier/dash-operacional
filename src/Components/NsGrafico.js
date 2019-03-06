import React from "react";
import { Doughnut } from "react-chartjs-2";

import utils from "../functions";
import { defaults } from "chart.js";

defaults.global.legend.display = false;

const NsGrafico = ({ grupos }) => {
  const style = {
    texto: {
      transform: "translateY(-3.3rem)",
      height: 0,
      fontWeight: "bold",
      fontSize: "2rem"
    }
  };
  const { nsGeral } = utils;
  const nivelDeServico = nsGeral(grupos);
  const bgNs =
    nivelDeServico >= 80
      ? "rgba(100,200,100,1)"
      : nivelDeServico < 80 && nivelDeServico >= 36
      ? "rgba(250,150,10,1)"
      : "rgba(200,50,50,1)";

  const chartNs = {
    datasets: [
      {
        data: [nivelDeServico, 100 - nivelDeServico],
        backgroundColor: [bgNs, "rgba(0,0,0,.05)"]
      }
    ]
  };

  const optionsNs = {
    rotation: Math.PI,
    circumference: Math.PI,
    plugins: { datalabels: { display: false } }
  };
  return (
    <React.Fragment>
      <Doughnut data={chartNs} options={optionsNs} height={170} />
      <p className="mt-2 mb-0" style={style.texto}>
        {Math.round(nsGeral(grupos))}
        <small style={{ fontSize: ".9rem", fontWeight: "bold" }}>%</small>
      </p>
    </React.Fragment>
  );
};

export default NsGrafico;
