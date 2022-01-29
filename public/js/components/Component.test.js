import Component from "./Component";

describe("Given a Component component", () => {
  describe("When it gets instantiated", () => {
    test("Then it should render an element", () => {
      const container = document.createElement("div");

      new Component(container);

      expect(container.innerHTML).not.toBe(null);
    });
  });

  describe("When it gets instantiated with a class name 'navbar", () => {
    test("Then it should render an element with class 'navbar'", () => {
      const container = document.createElement("div");

      new Component(container, "navbar");

      expect(container.querySelector(".navbar")).not.toBe(null);
    });
  });

  describe("When it gets instantiated with an htmlTag 'li'", () => {
    test("Then it should render a 'li' element", () => {
      const container = document.createElement("div");

      new Component(container, "navbar", "li");

      expect(container.querySelector("li")).not.toBe(null);
    });
  });
});
