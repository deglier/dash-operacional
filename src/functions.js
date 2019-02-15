const utils = {
  SecToHora: strHora => {
    var decimalTimeString = strHora;
    //decimalTimeString = decimalTimeString.replace(',','.');
    var decimalTime = parseFloat(decimalTimeString);
    var hours = Math.floor(decimalTime / (60 * 60));
    decimalTime = decimalTime - hours * 60 * 60;
    var minutes = Math.floor(decimalTime / 60);
    decimalTime = decimalTime - minutes * 60;
    var seconds = Math.round(decimalTime);
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return "" + hours + ":" + minutes + ":" + seconds;
  },

  gruposByMaisAntiga: objeto => {
    let maior = -999;
    objeto.map(grupo => {
      if (grupo.ChamMaisAntigaEsperando > maior) {
        maior = grupo.ChamMaisAntigaEsperando;
      }
      return maior;
    });
    return maior;
  },

  tmaGeral: objeto => {
    let chamadas = 0;
    let traffic = 0;
    objeto.map(grupo => {
      if (grupo.ChamsAten !== 0) {
        if (grupo.ChamsAten !== undefined) {
          chamadas = chamadas + grupo.ChamsAten;
          traffic = traffic + grupo.ChamsAten * grupo.TMA;
        }
      }
      return null;
    });

    return traffic / chamadas;
  },

  tmeGeral: objeto => {
    let chamadas = 0;
    let trafego = 0;
    objeto.map(grupo => {
      if (grupo.ChamsRecebidas !== 0) {
        if (grupo.ChamsRecebidas !== undefined) {
          chamadas = chamadas + grupo.ChamsRecebidas;
          trafego = trafego + grupo.ChamsRecebidas * grupo.TME;
        }
      }
      return null;
    });

    return trafego / chamadas;
  },

  nsGeral: objeto => {
    let chamadas = 0;
    let trafego = 0;
    objeto.map(grupo => {
      if (grupo.ChamsRecebidas !== 0) {
        if (grupo.ChamsRecebidas !== undefined) {
          chamadas = chamadas + grupo.ChamsRecebidas;
          trafego = trafego + grupo.ChamsRecebidas * grupo.NS20Seg;
        }
      }
      return null;
    });

    return trafego / chamadas;
  }
};

export default utils;
