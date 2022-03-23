import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FullScreenNavigation, MenuList } from "./fullscreen-navigation";

const menuListMock: MenuList[] = [
  {
    href: "#about",
    label: "About",
    target: "_self"
  },
  {
    href: "#experience",
    label: "Experience",
    target: "_self"
  },
  {
    href: "#contact",
    label: "Contact",
    target: "_self"
  },
  {
    href: "/resume",
    label: "Resume",
    target: "_self"
  }
];

export default {
  title: "components/fullscreen-navigation",
  component: FullScreenNavigation,
  argTypes: {
    menuList: {
      defaultValue: menuListMock,
      control: { type: "object" }
    },
    isOpened: {
      defaultValue: true,
      control: { type: "boolean" }
    }
  }
} as ComponentMeta<typeof FullScreenNavigation>;

export const Template: ComponentStory<typeof FullScreenNavigation> = ({ ...props }) => (
  <FullScreenNavigation {...props} />
);
