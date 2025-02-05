import React from "react";
import { ElixirsHomeScroll } from "../Elixirs";
import { HousesHomeScroll } from "../Houses";
import { IngredientsHomeScroll } from "../Ingredients";
import { SpellsHomeScroll } from "../Spells";
import { WizardsHomeScroll } from "../Wizards";

export default function Home() {
  return (
    <>
      <ElixirsHomeScroll />
      <IngredientsHomeScroll />
      <HousesHomeScroll />
      <SpellsHomeScroll />
      <WizardsHomeScroll />
    </>
  );
}
