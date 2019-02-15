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
      <div className="card">
        <div className="card-body">
          <table
            className="table table-bordered table-striped table-sm bg-white mb-0"
            style={{ fontSize: ".6rem", textAlign: "center" }}
          >
            <thead style={{ textTransform: "uppercase" }}>
              <tr>
                {theads.map((thh, i) => (
                  <th key={i}>{thh}</th>
                ))}
              </tr>
            </thead>
            <tbody style={{ fontSize: ".7rem" }}>
              {fila > 0 ? filterbyOld() : filterbyNS()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableList;
