import React, { FunctionComponent } from "react";
import classnames from "classnames";
import styles from "./circle.css";

export enum CircleFullColor {
  Carbon = "carbon"
}

export type CircleFullProps = {
  color: CircleFullColor;
};

export const CircleFull: FunctionComponent<CircleFullProps> = ({ color }) => {
  const classes = classnames({
    [styles.carbon]: color === CircleFullColor.Carbon
  });

  return (
    <svg className={classes} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-testid="circle-full">
      <circle cx="25" cy="25" r="24" />
    </svg>
  );
};
