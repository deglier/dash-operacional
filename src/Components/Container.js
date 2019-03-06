import React from "react";
import TableList from "./TableList";
import Indicadores from "./Indicadores";

const Container = props => {
  return (
    <div className="row">
      <TableList {...props} />
      <Indicadores {...props} />
    </div>
  );
};

export default Container;
