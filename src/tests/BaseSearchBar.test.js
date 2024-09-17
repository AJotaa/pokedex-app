import { render, screen } from "@testing-library/react";
import { BaseSearchBar } from "../components/interface/BaseSearchBar";

describe('base search bar', () => {

  // let searchbar;
  // beforeEach(() => {
  //   searchbar = screen.getByPlaceholderText("Pokémon")
  // })
  test("existe en el dom", () => {
    render(<BaseSearchBar/>)
    const searchbar = screen.getByPlaceholderText("Pokémon")
    expect(searchbar).toBeInTheDocument()
  })
})