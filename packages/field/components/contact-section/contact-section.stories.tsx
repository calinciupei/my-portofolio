import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContactClick, ContactSection } from "./contact-section";
import { actions } from "@storybook/addon-actions";

export default {
  title: "components/contact-section",
  component: ContactSection
} as ComponentMeta<typeof ContactSection>;

const handleClick: ContactClick = actions({ onClick: "contact button clicked" }) as unknown as ContactClick;

export const main: ComponentStory<typeof ContactSection> = () => (
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
    <ContactSection onClick={handleClick} {...handleClick} />
  </div>
);
