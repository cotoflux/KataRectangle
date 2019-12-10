class Rectangle {
    constructor() {
      this.ladoA = 3;
      this.ladoB = 4;
    }
  
    perimetro(ladoA, ladoB) {
      let miPerimetro = this.ladoA*2 + this.ladoB*2;
      return miPerimetro;

    }
  }

  module.exports = Rectangle;