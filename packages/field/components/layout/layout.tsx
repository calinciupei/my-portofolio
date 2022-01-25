import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./layout.css";

export type LayoutProps = {
  isMenuOpen: boolean;
};

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
  isMenuOpen,
}) => {
  const classStyles = classnames(styles.layout, {
    [styles.noScroll]: isMenuOpen,
  });

  document.body.classList.remove(styles.noScroll);

  if (isMenuOpen) {
    document.body.classList.add(styles.noScroll);
  }

  return (
    <>
      <div className={classStyles}>{children}</div>
    </>
  );
};
