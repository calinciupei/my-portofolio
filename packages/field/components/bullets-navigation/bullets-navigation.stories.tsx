import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BulletsNavigation } from "./bullets-navigation";

const bullets = [
  {
    isActive: true,
    section: "#about",
    imageAlt: "Calin Ciupei Profile",
    imageSrc: "/cc-portfolio.png"
  },
  {
    isActive: false,
    section: "#skills",
    imageAlt: "Calin Ciupei Profile",
    imageSrc: "/cc-portfolio.png"
  },
  {
    isActive: false,
    section: "#experience",
    imageAlt: "Calin Ciupei Profile",
    imageSrc: "/cc-portfolio.png"
  },
  {
    isActive: false,
    section: "#contact",
    imageAlt: "Calin Ciupei Profile",
    imageSrc: "/cc-portfolio.png"
  }
];

export default {
  title: "components/bullets-navigation",
  component: BulletsNavigation,
  argTypes: {
    bullets: {
      defaultValue: bullets,
      control: {
        type: "object"
      }
    }
  }
} as ComponentMeta<typeof BulletsNavigation>;

const Template: ComponentStory<typeof BulletsNavigation> = ({ ...props }) => (
  <div
    style={{
      backgroundColor: "white",
      width: "100%",
      minHeight: "1080px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "30px"
    }}
  >
    <BulletsNavigation {...props} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  bullets: bullets,
  onClick: action("bullet-clicked")
};
