import React, { FunctionComponent } from "react";
import { Order } from "@crew/types";

import { AskRow } from "../ask-row/ask-row";

import styles from "./ask.css";

export type AskProps = {
  orders: Order[][];
  ordersSize: number;
};

export const Ask: FunctionComponent<AskProps> = ({ orders, ordersSize }) => {
  return (
    <div className={styles.ask}>
      <div className={styles.row}>
        <div>PRICE</div>
        <div>SIZE</div>
        <div>TOTAL</div>
      </div>

      {!!orders.length &&
        orders.map((order, index) => (
          <AskRow
            key={index}
            price={order[1].price}
            size={order[1].size}
            total={order[1].totalSize}
            orderSize={ordersSize}
            row={index + 2}
          />
        ))}
    </div>
  );
};
