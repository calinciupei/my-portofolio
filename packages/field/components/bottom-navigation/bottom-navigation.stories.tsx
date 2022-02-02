import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BottomNavigation, MenuClick } from "./bottom-navigation";
import { actions } from "@storybook/addon-actions";

export default {
  title: "components/bottom- navigation",
  component: BottomNavigation,
  argTypes: { onClick: { action: "clicked" } }
} as ComponentMeta<typeof BottomNavigation>;

const handleClick: MenuClick = actions({ onClick: "clicked menu" }) as unknown as MenuClick;

export const Menu: ComponentStory<typeof BottomNavigation> = () => (
  <BottomNavigation instagram="instagram" linkedin="linkedin" twitter="twitter" github="github" {...handleClick} />
);
