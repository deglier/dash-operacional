import React from "react";

const Slider = props => {
  const { path, alt } = props;

  return <img className="img-fluid" src={path} alt={alt} />;
};

export default Slider;
