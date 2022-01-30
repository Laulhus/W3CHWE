import getPokemonList from "./getPokemonList";

describe("Given a getPokemonList function", () => {
  describe("When it gets called", () => {
    test("Then it should return an array of pokemon objects", () => {
      const pokemonLists = getPokemonList();
      const expectedfirstItem = {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      };

      expect(pokemonLists[0]).toBe(expectedfirstItem);
    });
  });
});
