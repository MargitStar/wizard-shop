import React from "react";
import { ElixirsHomeScroll } from "../Elixirs";
import { HousesHomeScroll } from "../Houses";
import { IngredientsHomeScroll } from "../Ingredients";
import { SpellsHomeScroll } from "../Spells";
import { WizardsHomeScroll } from "../Wizards";

export default function Home({ handleItemClick }) {
  return (
    <>
      <ElixirsHomeScroll handleItemClick={handleItemClick} />
      <IngredientsHomeScroll handleItemClick={handleItemClick} />
      <HousesHomeScroll handleItemClick={handleItemClick} />
      <SpellsHomeScroll handleItemClick={handleItemClick} />
      <WizardsHomeScroll handleItemClick={handleItemClick} />
    </>
  );
}
