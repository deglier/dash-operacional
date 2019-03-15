import React from "react";

const Fila = ({ fila }) => {
  return (
    <span
      className={
        "text-" +
        (fila === 0 ? "success" : fila <= 5 && fila > 0 ? "warning" : "danger")
      }
    >
      {fila}
    </span>
  );
};

export default Fila;
