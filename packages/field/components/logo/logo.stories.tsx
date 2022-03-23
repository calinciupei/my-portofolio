import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Logo, LogoColor } from "./logo";

export default {
  title: "components/logo",
  component: Logo,
  arrTypes: {
    color: {
      options: [LogoColor.Carbon, LogoColor.Blue, LogoColor.White],
      control: { type: "select" }
    }
  }
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = ({ ...props }) => (
  <div
    style={{
      backgroundColor: "white",
      width: "100%",
      minHeight: "1080px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
      padding: "30px"
    }}
  >
    <Logo {...props} />
  </div>
);

export const Main = Template.bind({});
Template.args = {
  color: LogoColor.Carbon
};
