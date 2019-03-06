import React from "react";

const Card = props => {
  return (
    <div
      className={"mb-2 text-center col" + (props.col ? `-${props.col}` : "")}
    >
      <div className="Card">
        <div className="card-body bg-white">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
