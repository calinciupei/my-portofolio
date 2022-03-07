import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./chevron.css";

export enum ChevronColor {
  carbon = "carbon",
  grey400 = "grey400",
  white = "white"
}

export enum ChevronType {
  down = "down"
}

export type ChevronProps = {
  color: ChevronColor;
  type?: ChevronType;
};

export const Chevron: FunctionComponent<ChevronProps> = ({ color, type }) => {
  const styleClass = classnames(styles.icon, {
    [styles.carbon]: ChevronColor.carbon === color,
    [styles.grey400]: ChevronColor.grey400 === color,
    [styles.white]: ChevronColor.white === color,
    [styles.down]: ChevronType.down === type
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={styleClass}
      viewBox="0 0 16 16"
      data-testid="chevron-icon"
    >
      <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg>
  );
};
