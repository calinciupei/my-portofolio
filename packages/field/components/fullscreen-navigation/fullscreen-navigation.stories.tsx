import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { FullScreenNavigation } from "./fullscreen-navigation";

export default {
  title: "components/fullscreen-navigation",
  component: FullScreenNavigation
} as ComponentMeta<typeof FullScreenNavigation>;

export const Navigation: ComponentStory<typeof FullScreenNavigation> = () => (
  <FullScreenNavigation isOpened={boolean("Is Opened", true)} />
);
