import React, { FunctionComponent } from "react";
import classnames from "classnames";
import styles from "./circle-dot.css";

export enum CircleDotColors {
  Carbon = "carbon"
}

export type CircleDotProps = {
  color: CircleDotColors;
};

export const CircleDot: FunctionComponent<CircleDotProps> = ({ color }) => {
  const classes = classnames({
    [styles.carbon]: color === CircleDotColors.Carbon
  });

  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={classes} data-testid="circle-dot">
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" />
    </svg>
  );
};
