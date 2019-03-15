import React from "react";
import TableList from "./TableList";
import Indicadores from "./Indicadores";
import LastUpdate from "./LastUpdate";

const Container = props => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <TableList {...props} />
        </div>
        <Indicadores {...props} />
      </div>
    </React.Fragment>
  );
};

export default Container;
