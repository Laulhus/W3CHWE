import CardComponent from "./CardComponent.js";

describe("Given a CardComponent component", () => {
  describe("When it gets instantiated", () => {
    test("Then it should render an element", () => {
      const container = document.createElement("div");

      new CardComponent(container);

      expect(container.innerHTML).not.toBe(null);
    });
  });

  describe("When it gets instantiated with an object", () => {
    test("Then it should store the object properties", () => {
      const container = document.createElement("div");
      const mockPokemon = { name: "Pikachu", type: "shock" };

      const card = new CardComponent(container, "pokemon", "div", mockPokemon);

      expect(card.pokemon.name).toBe(mockPokemon.name);
    });
  });
});
