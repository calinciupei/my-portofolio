import React, { FunctionComponent } from "react";
import classnames from "classnames";
import styles from "./angular.css";

export enum AngularColor {
  Carbon = "carbon"
}

export type AngularProps = {
  color: AngularColor;
};

export const Angular: FunctionComponent<AngularProps> = ({ color }) => {
  const stylesNames = classnames(styles.icon, {
    [styles.carbon]: AngularColor.Carbon === color
  });
  return (
    <svg className={stylesNames} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 448 512">
      <path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path>
    </svg>
  );
};
