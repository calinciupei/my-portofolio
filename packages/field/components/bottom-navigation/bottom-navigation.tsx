import React, { FunctionComponent, useCallback, useState } from "react";
import { Icons } from "../icons/icons";

import styles from "./bottom-navigation.css";

const {
  Github,
  GithubColor,
  Instagram,
  InstagramColor,
  Linkedin,
  LinkedinColor,
  Twitter,
  TwitterColor,
  Menu,
  MenuColor,
  MenuOpened,
  MenuOpenedColor
} = Icons;

export const BottomNavigation: FunctionComponent = () => {
  const [isOpened, setIsOpened] = useState(false);

  const renderButton = (): JSX.Element => {
    return isOpened ? <MenuOpened color={MenuOpenedColor.white} /> : <Menu color={MenuColor.white} />;
  };

  const handleMenuClick = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  return (
    <div className={styles.menu}>
      <ul className={styles.list}>
        <li>
          <Instagram color={InstagramColor.Carbon} />
        </li>
        <li>
          <Linkedin color={LinkedinColor.carbon} />
        </li>
        <li className={styles.menuItem}>
          <button onClick={handleMenuClick} className={styles.button}>
            {renderButton()}
          </button>
        </li>
        <li>
          <Twitter color={TwitterColor.carbon} />
        </li>
        <li>
          <Github color={GithubColor.Carbon} />
        </li>
      </ul>
    </div>
  );
};
