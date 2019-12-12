class Rectangulo {
    constructor(base, altura) {
      this.alturaR = altura;
      this.baseR = base;
    }

     perimetro() {
      let miPerimetro = this.alturaR*2 + this.baseR*2;
      return miPerimetro;
    }

    area(){
      let miArea = this.alturaR*this.baseR;
      return miArea;
    }
  }

  module.exports = Rectangulo;