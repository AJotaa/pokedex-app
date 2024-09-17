import { fetchTest } from "../hooks/useFetch";

// describe("Funcion del hook useFetch", () => {

test("Funcion del hook useFetch", async () => {
  const { result } = await fetchTest("https://pokeapi.co/api/v2/generation/");
  expect(typeof result).toBe("object");
});
// })
