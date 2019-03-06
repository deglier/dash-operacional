import React from "react";
import Moment from "react-moment";
import "moment/locale/pt-br";
import Logo from "./logo";

const LastUpdate = ({ updated_at }) => {
  console.log(updated_at);

  return (
    <small className="col text-center">
      <Logo who="clock" color="rgba(0,0,0,.5)" width={15} height={15} />{" "}
      Atualizado{" "}
      <Moment interval={300} parse="hh:mm:ss" fromNow locale="pt-br">
        {updated_at}
      </Moment>
    </small>
  );
};

export default LastUpdate;
