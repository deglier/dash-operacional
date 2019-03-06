import React from "react";

const Card = props => {
  return (
    <div className="col mb-2 text-center">
      <div className="Card">
        <div className="card-body bg-white">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
