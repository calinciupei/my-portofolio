import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BottomNavigation } from "./bottom-navigation";

export default {
  title: "components/bottom navigation",
  component: BottomNavigation
} as ComponentMeta<typeof BottomNavigation>;

export const Menu: ComponentStory<typeof BottomNavigation> = () => <BottomNavigation />;
