class Rectangle {
    constructor() {
      this.ladoA = 3;
      this.ladoB = 4;
    }
  
    perimetro(ladoA, ladoB) {
      let miPerimetro = this.ladoA*2 + this.ladoB*2;
      return miPerimetro;

    }

    area(ladoA, ladoB){
      let miArea = this.ladoA*this.ladoB;
      return miArea;
    }
  }

  module.exports = Rectangle;