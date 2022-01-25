import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { defaultParameters } from "../../.storybook/constants";

import { BidRow } from "./bid-row";

const story = storiesOf("components", module).addDecorator(withKnobs).addParameters(defaultParameters);

story.add("bid-row", () => {
  return (
    <div style={{
      backgroundColor: "var(--blue-50)",
      display: "grid"

    }}>
      <BidRow 
        total={number("Total", 1150)} 
        size={number("Size", 1000)}
        price={number("Price", 101)}
        fill={number("Fill", 0.25)}
        row={number("Row", 1)}
      />
    </div>
  );
});
