import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./ask-row.css";

export type AskRowPros = {
  price: number;
  size: number;
  total: number;
  orderSize: number;
  row: number;
};

export const AskRow: FunctionComponent<AskRowPros> = ({
  price,
  size,
  total,
  orderSize,
  row,
}) => {
  const classes = classnames(styles.row, "typography-h120");
  const fill = Math.abs((orderSize - total) / (orderSize + total));
  const stylesRow = {
    "--fill": fill,
    gridRowStart: row,
  };

  return (
    <>
      <div className={styles.fill} style={stylesRow}></div>
      <div className={classes} style={{ gridRowStart: row }}>
        <div className={styles.price}>{price}</div>
        <div>{size}</div>
        <div>{total}</div>
      </div>
    </>
  );
};
