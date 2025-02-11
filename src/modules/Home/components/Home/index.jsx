import React from "react";
import HousesHomeScroll from "../../../Houses/components/Scroll";
import ElixirsHomeScroll from "../../../Elixirs/components/Scroll";
import SpellsHomeScroll from "../../../Spells/components/Scroll";
import WizardsHomeScroll from "../../../Wizards/components/Scroll";
import IngredientsHomeScroll from "../../../Ingredients/components/Scroll";

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
