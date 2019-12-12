const Rectangulo = require("./Rectangulo");

describe("Mommifier", () => {

  it("test recibiendo el perimetro correctamente calculado",() => {
    let baseRectangulo = 4;
    let alturaRectangulo = 5;
    let perimetroEsperado = baseRectangulo*2 + alturaRectangulo*2;
    let rectangulo = new Rectangulo(baseRectangulo, alturaRectangulo);
    expect(rectangulo.perimetro()).toBe(perimetroEsperado);
  });

  it("testeando que el área esta correctamente calculada", () =>{
    let baseRectangulo  = 3;
    let alturaRectangulo = 4;
    let areaEsperada = baseRectangulo * alturaRectangulo;
    let rectangulo = new Rectangulo(baseRectangulo, alturaRectangulo);
    expect(rectangulo.area()).toBe(areaEsperada);
  });
});
