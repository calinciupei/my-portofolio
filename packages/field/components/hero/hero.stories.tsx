import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Hero, HeroClick } from "./hero";
import { actions } from "@storybook/addon-actions";

import heroImage from "../../__mocks__/cc-portfolio.png";

export default {
  title: "components/hero",
  component: Hero
} as ComponentMeta<typeof Hero>;

const handleClick = actions({ onClick: "hero clicked" }) as unknown as HeroClick;

export const base: ComponentStory<typeof Hero> = () => (
  <div
    style={{
      backgroundColor: "white",
      width: "100%",
      minHeight: "1080px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Hero imgSrc={heroImage} onClick={() => {}} {...handleClick} />
  </div>
);
