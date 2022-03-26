import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BulletNavigation } from "./bullet-navigation";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/bullet-navigation",
  component: BulletNavigation,
  argTypes: {
    isActive: {
      default: true,
      control: { type: "boolean" }
    },
    section: {
      default: "#about",
      control: { type: "text" }
    },
    imageAlt: {
      default: "Calin Ciupei Profile",
      control: { type: "text" }
    },
    imageSrc: {
      default: "/cc-portfolio.png",
      control: { type: "text" }
    }
  }
} as ComponentMeta<typeof BulletNavigation>;

const Template: ComponentStory<typeof BulletNavigation> = ({ ...props }) => (
  <div
    style={{
      width: "100%",
      margin: "0 auto",
      minHeight: "1080px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "30px"
    }}
  >
    <BulletNavigation {...props} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  isActive: true,
  section: "#about",
  onClick: action("bullet-clicked"),
  imageAlt: "Calin Ciupei Profile",
  imageSrc: "/cc-portfolio.png"
};
