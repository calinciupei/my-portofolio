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

export type MenuClick = (isOpened: boolean) => void;

export type BottomNavigationProps = {
  instagram: string;
  linkedin: string;
  twitter: string;
  github: string;
  onClick?: MenuClick;
};

export const BottomNavigation: FunctionComponent<BottomNavigationProps> = ({
  instagram,
  linkedin,
  twitter,
  github,
  onClick
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const renderButton = (): JSX.Element => {
    return isOpened ? <MenuOpened color={MenuOpenedColor.white} /> : <Menu color={MenuColor.white} />;
  };

  const handleMenuClick = useCallback(() => {
    setIsOpened(!isOpened);
    if (onClick) {
      onClick(isOpened);
    }
  }, [isOpened, onClick]);

  return (
    <div className={styles.menu} data-testid="bottom-navigation">
      <ul className={styles.list}>
        <li>
          <a className={styles.link} href={instagram} target="_blank" rel="noreferrer">
            <Instagram color={InstagramColor.Carbon} />
          </a>
        </li>
        <li>
          <a className={styles.link} href={linkedin} target="_blank" rel="noreferrer">
            <Linkedin color={LinkedinColor.carbon} />
          </a>
        </li>
        <li className={styles.menuItem}>
          <button onClick={handleMenuClick} className={styles.button} data-testid="button-navigation">
            {renderButton()}
          </button>
        </li>
        <li>
          <a className={styles.link} href={twitter} target="_blank" rel="noreferrer">
            <Twitter color={TwitterColor.carbon} />
          </a>
        </li>
        <li>
          <a className={styles.link} href={github} target="_blank" rel="noreferrer">
            <Github color={GithubColor.Carbon} />
          </a>
        </li>
      </ul>
    </div>
  );
};
