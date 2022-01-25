import React, { FunctionComponent } from "react";
import { Order } from "@crew/types";

import { BidRow } from "../bid-row/bid-row";

import styles from "./bids.css";

export type BidsProps = {
  orders: Order[][];
  ordersSize: number;
};

export const Bids: FunctionComponent<BidsProps> = ({ orders, ordersSize }) => {
  return (
    <div className={styles.ask}>
      <div className={styles.row}>
        <div>TOTAL</div>
        <div>SIZE</div>
        <div>PRICE</div>
      </div>

      {!!orders.length &&
        orders.map((order, index) => (
          <BidRow
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
