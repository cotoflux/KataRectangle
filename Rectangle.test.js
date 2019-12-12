const Rectangle = require("./Rectangle");

describe("Mommifier", () => {

  it("testing reciving perimeter",() => {
    let ladoA = 4;
    let ladoB = 5;
    let perimetroEsperado = ladoA*2 +ladoB*2;
    let rectangle = new Rectangle(ladoA, ladoB);
    expect(rectangle.perimetro()).toBe(perimetroEsperado);
  });

  it("testing is area is correctly calculated", () =>{
    let ladoA = 3;
    let ladoB = 4;
    let areaEsperada = ladoA * ladoB;
    let area = new Rectangle(ladoA, ladoB);
    expect(area.area()).toBe(areaEsperada);
  });
});
