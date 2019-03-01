import React from "react";
import TableList from "./TableList";

const Container = props => {
  return (
    <div className="row">
      <TableList {...props} />
      
    </div>
  );
};

export default Container;
