import React from "react";
import { Pie } from "react-chartjs-2";
import { defaults } from "chart.js";
import "chartjs-plugin-datalabels";

defaults.global.legend.display = false;

const AgtsGrafico = ({ AgtsDisponiveis, AgtsPAUSA, AgtsFalando }) => {
  const cores = [
    "rgba(100,200,100,.8)",
    "rgba(0, 120,200,.8)",
    "rgba(200,50,50,.8)"
  ];
  const dados = [AgtsDisponiveis, AgtsFalando, AgtsPAUSA];
  const legendas = ["Disponíveis", "Falando", "Pausa"];

  const label = legendas.filter((val, i) => dados[i] > 0);
  const dadosNoZero = dados.filter(val => val > 0);
  const bgColor = cores.filter((val, i) => dados[i] > 0);

  const chartAgts = {
    labels: label,
    datasets: [
      {
        data: dadosNoZero,
        backgroundColor: bgColor
      }
    ]
  };
  const optionsAgts = {
    plugins: {
      datalabels: {
        font: {
          weight: "bold",
          size: "16"
        },
        color: "black",
        formatter: value => value
      }
    }
  };
  return <Pie options={optionsAgts} data={chartAgts} height={300} />;
};

export default AgtsGrafico;
