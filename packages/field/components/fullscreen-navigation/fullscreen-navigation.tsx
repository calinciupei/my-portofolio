import React, { FunctionComponent, useEffect, useState } from "react";
import classnames from "classnames";

import styles from "./fullscreen-navigation.css";

export type MenuList = {
  target: string;
  href: string;
  label: string;
};

export type FullScreenNavigationProps = {
  isOpened: boolean;
  menuList: MenuList[];
};

export const FullScreenNavigation: FunctionComponent<FullScreenNavigationProps> = ({ isOpened, menuList }) => {
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

  const renderList = (): JSX.Element => (
    <>
      {!!menuList.length &&
        menuList.map(({ href, label, target }, index) => (
          <li key={index} data-testid="menu-item">
            <a href={href} target={target} className={linkStyle}>
              <span>{index + 1}.</span> {label}
            </a>
          </li>
        ))}
    </>
  );

  return (
    <>
      {opened && (
        <div className={menuStyle} data-testid="fullscreen-navigation">
          <ul>{renderList()}</ul>
        </div>
      )}
    </>
  );
};
