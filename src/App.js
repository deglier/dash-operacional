import React, { Component } from "react";
import NavBar from "./Components/navbar";
import Container from "./Components/Container";
import axios from "axios";
import NeoSpinner from "./Components/neo-spinner";
import TableList from "./Components/TableList";
import Slider from "./Components/Slider";

const theads = [
  <span>ESPECIALIDADES</span>,
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
      changeIt: false,
      time: 10000,
      slides: [],
      slidesLenght: 0,
      render: [<TableList {...this} />],
      indexValue: 0,
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
    this.indexValue = 0;
    this.newArrayList = [];
    this.dados = {};
    this.config = [];
  }

  componentDidMount() {
    this.fetchDados();
    this.fetchConfig();
    setTimeout(() => {
      this.setAllStates();
      this.updateDatas = setInterval(() => {
        this.fetchConfig();
        this.fetchDados();
        this.setAllStates();
        let data = new Date();
        console.log(data);
      }, this.state.time);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.updateDatas);
  }
  fetchConfig = async () => {
    var self = this;
    await axios.get("/config.json").then(response => {
      const { changeScreen } = response.data[0];
      self.config = changeScreen;
      setTimeout(() => {
        self.setRenderArray();
        self.indexValue = self.dispatchIndexValue(changeScreen.slides.length);
      }, 300);
    });
  };
  setRenderArray() {
    let arrayTemp = [];
    for (let i = 0; i < this.config.slides.length; i++) {
      arrayTemp = [
        ...arrayTemp,
        <TableList {...this.state} />,
        <Slider path={this.config.slides[i]} alt="slide" />
      ];
      this.newArrayList = [...arrayTemp];
    }
  }

  setAllStates() {
    const dados = this.dados;
    const config = this.config;
    console.log(config.time);

    this.setState({
      changeIt: config.changeIt,
      time: config.time,
      render: [...this.newArrayList],
      isFila: dados.fila > 0 ? true : false,
      fila: dados.fila,
      indexValue: this.indexValue,
      updated_at: dados.updated_at,
      grupos: dados.grupos,
      AgtsDisponiveis: dados.grupos[0].AgtsDisponiveis,
      AgtsPAUSA: dados.grupos[0].AgtsPAUSA,
      hide: true
    });
  }

  dispatchIndexValue = length => {
    if (this.indexValue === length * 2 - 1) {
      return 0;
    } else {
      return this.indexValue + 1;
    }
  };
  fetchDados = async () => {
    var self = this;
    await axios
      .get("/dados.json")
      .then(response => (self.dados = response.data[0]));
    self.setAllStates();
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
