import React from "react";
import icon from "./sprite.svg";

const Logo = props => {
  console.log(props);

  const styles = {
    width: props.width ? props.width : "100%",
    height: props.height ? props.height : "100%",
    fill: props.color ? props.color : "#000"
  };
  return (
    <svg style={styles}>
      <use xlinkHref={`${icon}#logo-${props.who}`} />
    </svg>
  );
};
export default Logo;