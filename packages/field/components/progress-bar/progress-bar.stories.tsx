import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProgressColor, ProgressLine } from "./progress-bar";

export default {
  title: "components/progress-line",
  component: ProgressLine,
  argTypes: {
    color: {
      options: [ProgressColor.Blue, ProgressColor.Green, ProgressColor.Red],
      control: { type: "select" }
    },
    delay: {
      control: { type: "number" }
    },
    label: {
      defaultValue: "React",
      control: { type: "text" }
    },
    progress: {
      control: { type: "number" }
    }
  }
} as ComponentMeta<typeof ProgressLine>;

const Template: ComponentStory<typeof ProgressLine> = ({ ...props }) => {
  return (
    <div style={{ backgroundColor: "white", padding: "50px" }}>
      <ProgressLine {...props} />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {
  color: ProgressColor.Blue,
  delay: 1000,
  progress: 80,
  label: "React"
};
