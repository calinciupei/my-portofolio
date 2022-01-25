import React, { FunctionComponent } from "react";
import { Order } from "@crew/types";

import styles from "./order-book.css";
import { Ask } from "../ask/ask";
import { Bids } from "../bids/bids";

export type OrderBookProps = {
  title: string;
  spread: string;
  asks: Order[][];
  bids: Order[][];
  asksTotalSize: number;
  bidsTotalSize: number;
};

export const OrderBook: FunctionComponent<OrderBookProps> = ({
  title,
  spread,
  asks,
  bids,
  asksTotalSize,
  bidsTotalSize,
}) => {
  return (
    <div className={styles.book}>
      <div className={styles.head}>{title}</div>
      <div className={styles.spread}>{spread}</div>
      <div className={styles.asks}>
        <Ask orders={asks} ordersSize={asksTotalSize} />
      </div>
      <div className={styles.bids}>
        <Bids orders={bids} ordersSize={bidsTotalSize} />
      </div>
    </div>
  );
};
