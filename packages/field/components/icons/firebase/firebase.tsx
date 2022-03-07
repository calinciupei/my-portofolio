import React, { FunctionComponent } from "react";
import classnames from "classnames";
import styles from "./firebase.css";

export enum FirebaseColor {
  Carbon = "carbon"
}

export type FirebaseProps = {
  color: FirebaseColor;
};

export const Firebase: FunctionComponent<FirebaseProps> = ({ color }) => {
  const classes = classnames(styles.icon, {
    [styles.carbon]: color === FirebaseColor.Carbon
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 15 15"
      className={classes}
      data-testid="firebase-icon"
    >
      <g>
        <path d="M3.33.03a.5.5 0 0 1 .524.116l2.078 2.08a.505.505 0 0 0-.032.056L2.175 9.988L3.33.03z"></path>
        <path d="M2.262 11.94l4.98 2.989a.5.5 0 0 0 .444.035l5-2a.5.5 0 0 0 .31-.52l-1-9a.5.5 0 0 0-.828-.318L9.513 4.597L2.262 11.94z"></path>
        <path d="M8.938 3.756L7.916 2.223a.5.5 0 0 0-.853.034l-.31.558l-2.986 6.177l5.171-5.236z"></path>
      </g>
    </svg>
  );
};
