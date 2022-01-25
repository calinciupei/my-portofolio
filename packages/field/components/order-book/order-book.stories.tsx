import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { defaultParameters } from "../../.storybook/constants";
import { Order } from "@crew/types";

import { OrderBook } from "./order-book";

const story = storiesOf("components", module).addDecorator(withKnobs).addParameters(defaultParameters);

const orders: Order[] = [
  { price: 100, size: 50, total: 50, fill: 0.15 },
  { price: 1005, size: 100, total: 150, fill: 0.5 },
  { price: 1010, size: 1000, total: 1150, fill: 0.8 }
]

story.add("order-book", () => {
  return (
    <div style={{backgroundColor: "var(--blue-50)" }}>
      <OrderBook
        spread={text("Spread", "Spread: 13.0 (0.04%)")}
        title={text("Title", "Order Book")} 
        asks={orders}
        bids={orders}
      />
    </div>
  );
});
