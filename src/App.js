import React, { Component } from "react";
import NavBar from "./Components/navbar";
import Container from "./Components/Container";
import axios from "axios";
import NeoSpinner from "./Components/neo-spinner";

const theads = [
  <span>ESPECIALIDES</span>,
  <span>
    <small>chamadas</small>
    <br /> RECEBIDAS
  </span>,
  <span>
    <small>chamadas</small>
    <br /> ABANDONADAS
  </span>,
  <span>
    <small>chamadas</small>
    <br /> ATENDIDAS
  </span>,
  <span>
    <small>chamadas</small>
    <br /> ESPERANDO
  </span>,
  <span>NS</span>,
  <span>
    <small>agentes</small>
    <br /> LOGADOS
  </span>,
  <span>
    <small>agentes</small>
    <br /> DISPONIVEIS
  </span>,
  <span>
    <small>agentes</small>
    <br /> FALANDO
  </span>,
  <span>
    <small>agentes</small>
    <br /> PAUSA
  </span>,
  <span>
    <small>mais antiga</small> <br /> ESPERANDO
  </span>,
  <span>
    <small>temp méd</small>
    <br /> ABANDONO
  </span>
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      theads,
      maisAntiga: 1,
      isFila: this.fila > 0 ? true : false,
      fila: 0,
      updated_at: "",
      grupos: [],
      codigos: {},
      AgtsDisponiveis: 0,
      AgtsPAUSA: 0
    };
  }
  componentWillMount() {
    //this.carregarDados();
    //console.log("chegando...");
  }

  componentDidMount() {
    setInterval(() => {
      this.carregarDados();
    }, 3000);
  }

  carregarDados = async () => {
    await axios.get("/dados.json").then(response =>
      this.setState({
        isFila: response.data[0].fila > 0 ? true : false,
        fila: response.data[0].fila,
        updated_at: response.data[0].updated_at,
        grupos: response.data[0].grupos,
        AgtsDisponiveis: response.data[0].grupos[0].AgtsDisponiveis,
        AgtsPAUSA: response.data[0].grupos[0].AgtsPAUSA,
        hide: true
      })
    );
  };

  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: "#dedede" }}>
        <NeoSpinner hide={this.state.hide} />
        {this.state.hide ? (
          <React.Fragment>
            <NavBar titulo="Acompanhamento Tempo Real" />
            <Container {...this.state} />
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default App;
