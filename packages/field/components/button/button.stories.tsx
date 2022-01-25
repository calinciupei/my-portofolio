import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { defaultParameters } from "../../.storybook/constants";
import { Button, ButtonVariant } from "./button";

export const actions = {
  onClick: action("button-click")
};

const story = storiesOf("components/button", module).addDecorator(withKnobs).addParameters(defaultParameters);

story.add("button", () => {
  return (
    <>
      <div style={{ minWidth: "500px", margin: "0 auto" }}>
        <Button variant={ButtonVariant.PRIMARY} {...actions}>
          {text("Primary", "Primary")}
        </Button>
      </div>
    </>
  );
});
