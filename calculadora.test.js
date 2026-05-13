const { sumar, restar, multiplicar, dividir } = require("./calculadora");

describe("Calculadora básica", () => {

  test("2 + 3 = 5", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test("10 - 4 = 6", () => {
    expect(restar(10, 4)).toBe(6);
  });

  test("3 * 4 = 12", () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test("10 / 2 = 5", () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test("10 / 0 = No se puede dividir entre 0", () => {
    expect(dividir(10, 0)).toBe("No se puede dividir entre 0");
  });

});