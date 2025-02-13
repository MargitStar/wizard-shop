export const PagesEnum = Object.freeze({
  HOME: "Home",
  ELIXIRS: "Elixirs",
  HOUSES: "Houses",
  INGREDIENTS: "Ingredients",
  SPELLS: "Spells",
  WIZARDS: "Wizards",
});

export const PAGES = [
  { page: PagesEnum.HOME, route: "/" },
  { page: PagesEnum.ELIXIRS, route: "/elixirs" },
  { page: PagesEnum.HOUSES, route: "/houses" },
  { page: PagesEnum.INGREDIENTS, route: "/ingredients" },
  { page: PagesEnum.SPELLS, route: "/spells" },
  { page: PagesEnum.WIZARDS, route: "/wizards" },
];

export const WIZARD_WORLD_BASE_URL = "https://wizard-world-api.herokuapp.com";
