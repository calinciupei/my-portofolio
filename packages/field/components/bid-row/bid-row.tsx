import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./bid-row.css";

export type BidRowProps = {
  price: number;
  size: number;
  total: number;
  orderSize: number;
  row: number;
};

export const BidRow: FunctionComponent<BidRowProps> = ({
  price,
  size,
  total,
  orderSize,
  row,
}) => {
  const classes = classnames(styles.row, "typography-h120");
  const fill = Math.abs((size - total) / (size + total));
  const stylesRow = {
    "--fill": fill,
    gridRowStart: row,
  };

  return (
    <>
      <div className={styles.fill} style={stylesRow}></div>
      <div className={classes} style={{ gridRowStart: row }}>
        <div>{total}</div>
        <div>{size}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </>
  );
};
