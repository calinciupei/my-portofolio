import React from "react";
import { storiesOf } from "@storybook/react";
import ColorStory from "./color/color";
import SpacingStory from "./spacing/spacing";
import Iconograph from "./iconograph/iconograph";

storiesOf("Theme", module)
  .add("Colors", () => <ColorStory />)
  .add("Spacing", () => <SpacingStory />)
  .add("Iconograph", () => <Iconograph />);
