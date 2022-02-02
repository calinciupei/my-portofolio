import '../assets/css/global.css';
import React from "react";
import { addParameters, addDecorator } from '@storybook/react';
import { withA11y } from "@storybook/addon-a11y"
import { themes } from "@storybook/theming";
import { Stylist } from "../components/stylist/stylist";

addDecorator(story => {
  return (
    <Stylist>
      {story()}
    </Stylist>
  );
});
addDecorator(withA11y);
addParameters({
  options: {
    theme: themes.dark
  }
});
