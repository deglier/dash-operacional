import React from "react";
import icon from "./sprite.svg";

const Logo = props => {
  const styles = {
    width: props.width ? props.width : "100%",
    height: props.height ? props.height : "100%",
    fill: props.color ? props.color : props.spinner ? "none" : "#000"
  };
  return (
    <svg style={styles}>
      <use xlinkHref={`${icon}#logo-${props.who}`} />
    </svg>
  );
};
export default Logo;
