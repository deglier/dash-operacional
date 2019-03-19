import React from "react";
import Indicadores from "./Indicadores";
import TableList from "./TableList";

const Container = props => {
  const componentToShow =
    props.render[props.indexValue] === undefined ? (
      <TableList {...props} />
    ) : (
      props.render[props.indexValue]
    );

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          {props.changeIt ? componentToShow : <TableList {...props} />}
        </div>
        <Indicadores {...props} />
      </div>
    </React.Fragment>
  );
};

export default Container;
