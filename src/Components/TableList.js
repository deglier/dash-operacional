import React from "react";
import TableRow from "./TableRow";

const TableList = props => {
  const { theads, grupos, fila } = props;

  const filterbyOld = () => {
    return grupos
      .filter(v => v.ChamsRecebidas > 0)
      .sort((a, b) => b.ChamMaisAntigaEsperando - a.ChamMaisAntigaEsperando)
      .map((tr, i) => <TableRow tr={tr} key={i} />);
  };

  const filterbyNS = () => {
    return grupos
      .filter(v => v.ChamsRecebidas > 0)
      .sort((a, b) => a.NS20Seg - b.NS20Seg)
      .map((tr, i) => <TableRow tr={tr} key={i} />);
  };

  return (
    <div className="col-10">
      <table
        className="table table-bordered table-striped table-sm bg-white"
        style={{ fontSize: ".8rem", textAlign: "center" }}
      >
        <thead style={{ textTransform: "uppercase" }}>
          <tr>
            {theads.map((thh, i) => (
              <th key={i}>{thh}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ fontSize: ".74rem" }}>
          {fila > 0 ? filterbyOld() : filterbyNS()}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
