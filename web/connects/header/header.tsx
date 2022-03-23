import React, { FunctionComponent } from "react";
import { ComponentProps } from "./props";
import styles from "./header.css";
import { Logo, LogoColor } from "@crew/field";

export const Header: FunctionComponent<ComponentProps> = () => {
  return (
    <div className={styles.header}>
      <Logo color={LogoColor.Carbon} />
    </div>
  );
};
