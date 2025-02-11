import React from "react";
import HousesHomeScroll from "../../modules/Houses/components/Scroll";
import ElixirsHomeScroll from "../../modules/Elixirs/components/Scroll";
import SpellsHomeScroll from "../../modules/Spells/components/Scroll";
import WizardsHomeScroll from "../../modules/Wizards/components/Scroll";
import IngredientsHomeScroll from "../../modules/Ingredients/components/Scroll";

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
