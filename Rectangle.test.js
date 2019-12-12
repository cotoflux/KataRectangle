const Rectangle = require("./Rectangle");

describe("Mommifier", () => {
  it("sample", () => {
    expect(true).toBe(true);
  });

  it("testing reciving perimeter",() => {
    let ladoA = 3;
    let ladoB = 4;
    let perimetroEsperado = ladoA*2 +ladoB*2;
    let perimetro = new Rectangle();
    expect(perimetro.perimetro(3,4)).toBe(perimetroEsperado);
  });

  it("testing is area is correctly calculated", () =>{
    let ladoA = 3;
    let ladoB = 4;
    let areaEsperada = ladoA * ladoB;
    let area = new Rectangle();
    expect(area.area(3,4)).toBe(areaEsperada);
  });
});
