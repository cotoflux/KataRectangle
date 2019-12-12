class Rectangle {
    constructor(base, altura) {
      this.ladoA = altura;
      this.ladoB = base;
    }

     perimetro() {
      let miPerimetro = this.ladoA*2 + this.ladoB*2;
      return miPerimetro;
    }

    area(){
      let miArea = this.ladoA*this.ladoB;
      return miArea;
    }
  }

  module.exports = Rectangle;