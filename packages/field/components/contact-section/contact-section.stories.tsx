import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContactClick, ContactSection } from "./contact-section";
import { actions } from "@storybook/addon-actions";

export default {
  title: "components/contact-section",
  component: ContactSection,
  argTypes: {
    title: {
      defaultValue: "React",
      control: { type: "text" }
    },
    salute: {
      defaultValue: "React",
      control: { type: "text" }
    },
    text: {
      defaultValue: "React",
      control: { type: "text" }
    },
    label: {
      defaultValue: "React",
      control: { type: "text" }
    }
  }
} as ComponentMeta<typeof ContactSection>;

const handleClick: ContactClick = actions({ onClick: "contact button clicked" }) as unknown as ContactClick;

export const Template: ComponentStory<typeof ContactSection> = ({ ...props }) => (
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
    <ContactSection {...handleClick} {...props} onClick={handleClick} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  label: "Say hello 👋",
  salute: "Hi",
  text: "Whether you have a question or just want to get in touch don&apos;t hesitate to write, and I&apos;ll try my best to get back to you.",
  title: "Don&apos;t hesitate to say"
};
