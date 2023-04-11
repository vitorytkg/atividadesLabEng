let carro = {};

function criarCarro() {
  let marca = document.getElementById("marca").value;
  let modelo = document.getElementById("modelo").value;
  let ano = document.getElementById("ano").value;
  let cor = document.getElementById("cor").value;
  let km = document.getElementById("km").value;
  let fipe = document.getElementById("fipe").value;

  carro = {
    marca: marca,
    modelo: modelo,
    ano: ano,
    cor: cor,
    km: km,
    fipe: fipe,

    anosUtilizacao: function () {
      let date = new Date();
      let anoAtual = date.getFullYear();
      let anos = anoAtual - this.ano;
      return anos;
    },

    valorMercado: function () {
      if (this.km <= 30000) {
        return this.fipe * 1.1;
      } else if (this.km > 30000 && this.km <= 50000) {
        return this.fipe;
      } else {
        return this.fipe * 0.9;
      }
    }
  };

  document.getElementById("dadosCarro").innerHTML =
    "Informações do carro:" + "<br>" +
    "Anos de Utilização: " + carro.anosUtilizacao() + "<br>" +
    "Valor de Mercado: " + carro.valorMercado();
}