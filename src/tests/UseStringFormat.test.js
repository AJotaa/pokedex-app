import { stringFormat } from "../hooks/useStringFormat"

describe("Funciones dentro de useStringFormat", () => {

  test("el resultado debe ser un string", () => {
    const result = stringFormat("hello friend")
    expect(typeof result).toBe('string')
  })

  test("La primera letra debe ser mayuscula", () => {
    const result = stringFormat("this is a test")
    expect(result).toBe('This Is A Test')
  })

  test("si el valor ingresado es diferente a string debe devolver string vacio", () => {
    const result = stringFormat(null)
    expect(result).toBe("")
  })
})