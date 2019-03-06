import React from "react";
import utils from "../functions";

const TableRow = props => {
  const { tr } = props;

  return (
    <tr className={"font-weight-" + (tr.AgtsFalando > 0 ? "bolder" : "normal")}>
      <td>{tr.Especialidade}</td>
      <td>{tr.ChamsRecebidas}</td>
      <td>{tr.ChamsAban}</td>
      <td>{tr.ChamsAten}</td>
      <td>{tr.ChamsEspera}</td>
      <td
        className={
          "text-" +
          (tr.NS20Seg >= 80
            ? "success"
            : tr.NS20Seg < 80 && tr.NS20Seg >= 36
            ? "warning"
            : "danger")
        }
      >
        {tr.NS20Seg}%
      </td>
      <td>{tr.AgtsLogados}</td>
      <td>{tr.AgtsDisponiveis}</td>
      <td>{tr.AgtsFalando}</td>
      <td>{tr.AgtsPAUSA}</td>
      <td
        className={"text-" + (tr.ChamMaisAntigaEsperando > 20 ? "danger" : "")}
      >
        {utils.SecToHora(tr.ChamMaisAntigaEsperando)}
      </td>
      <td>{utils.SecToHora(tr.TempoMedpAban)}</td>
    </tr>
  );
};

export default TableRow;
