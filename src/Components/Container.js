import React from "react";
import TableList from "./TableList";
import Indicadores from "./Indicadores";
import LastUpdate from "./LastUpdate";

const Container = props => {
  return (
    <React.Fragment>
      <div className="row">
        <TableList {...props} />
        <Indicadores {...props} />
      </div>
      <div className="row">
        <LastUpdate {...props} />
      </div>
    </React.Fragment>
  );
};

export default Container;
