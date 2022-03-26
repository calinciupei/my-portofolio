import React, { FunctionComponent } from "react";
import { ComponentProps } from "./props";
import styles from "./header.css";
import { Logo, LogoColor } from "@crew/field";

export const Header: FunctionComponent<ComponentProps> = ({ dispatchLogoClick }) => {
  return (
    <div className={styles.header}>
      <a href="/" onClick={dispatchLogoClick}>
        <Logo color={LogoColor.Carbon} />
      </a>
    </div>
  );
};
