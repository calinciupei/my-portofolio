import React, { FunctionComponent, useEffect, useState } from "react";
import classnames from "classnames";

import styles from "./fullscreen-navigation.css";

export type FullScreenNavigationProps = {
  isOpened: boolean;
};

export const FullScreenNavigation: FunctionComponent<FullScreenNavigationProps> = ({ isOpened }) => {
  const [opened, setOpened] = useState(isOpened);
  const linkStyle = classnames(`typography-h012 ${styles.link}`);
  const menuStyle = classnames(styles.menu, {
    [styles.active]: isOpened,
    [styles.hide]: !isOpened
  });

  useEffect(() => {
    if (!isOpened) {
      const openedTime = setTimeout(() => {
        setOpened(isOpened);
      }, 900);

      return () => clearTimeout(openedTime);
    } else {
      setOpened(isOpened);

      return;
    }
  }, [isOpened]);

  return (
    <>
      {opened && (
        <div className={menuStyle}>
          <ul>
            <li>
              <a href="#about" target="_self" className={linkStyle}>
                <span>1.</span> About
              </a>
            </li>
            <li>
              <a href="#experience" target="_self" className={linkStyle}>
                <span>2.</span>Experience
              </a>
            </li>
            <li>
              <a href="#contact" target="_self" className={linkStyle}>
                <span>3.</span>Contact
              </a>
            </li>
            <li>
              <a href="/xresume" target="_self" className={linkStyle}>
                <span>4.</span>Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
