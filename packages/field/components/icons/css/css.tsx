import React, { FunctionComponent } from "react";
import classnames from "classnames";
import styles from "./css.css";

export enum CssColor {
  Carbon = "carbon"
}

export type CssProps = {
  color: CssColor;
};

export const Css: FunctionComponent<CssProps> = ({ color }) => {
  const styleClasses = classnames(styles.icon, {
    [styles.carbon]: color === CssColor.Carbon
  });
  return (
    <svg className={styleClasses} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512">
      <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path>
    </svg>
  );
};
