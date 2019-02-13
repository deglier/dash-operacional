import React, { Component } from "react";
import logo_neo from "./logo-neo.png";
import logo_gab from "./logo-gab.png";
import NavBar from "./Components/navbar";
import { CssBaseline } from "@material-ui/core";

class App extends Component {
  render() {
    const logosHeader = {
      cliente: logo_gab,
      neo: logo_neo
    };
    return (
      <div className="App">
        <CssBaseline />
        <NavBar titulo="Dash Opercional" logos={logosHeader} />
      </div>
    );
  }
}

export default App;
