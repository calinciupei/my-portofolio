import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { defaultParameters } from "../../.storybook/constants";

import { Bids } from "./bids";
import { Order } from "../../../types";

const story = storiesOf("components", module).addDecorator(withKnobs).addParameters(defaultParameters);

const orders: Order[] = [
  { price: 100, size: 50, total: 50, fill: 0.15 },
  { price: 1005, size: 100, total: 150, fill: 0.5 },
  { price: 1010, size: 1000, total: 1150, fill: 0.8 }
]

story.add("bids", () => {
  return (
    <div style={{
      backgroundColor: "var(--blue-50)"
    }}>
      <Bids orders={orders} />
    </div>
  );
});
