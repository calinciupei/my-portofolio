import React, { FunctionComponent } from "react";
import { BulletNavigation, BulletNavigationClick, BulletNavigationProps } from "../bullet-navigation/bullet-navigation";

import styles from "./bullets-navigation.css";

export type BulletsNavigationProps = {
  bullets: BulletNavigationProps[];
  onClick?: BulletNavigationClick;
};

export const BulletsNavigation: FunctionComponent<BulletsNavigationProps> = ({ bullets, onClick }) => {
  return (
    <div className={styles.bullets}>
      {!!bullets &&
        bullets.map((bullet, index) => (
          <div key={index} className={styles.item}>
            <BulletNavigation {...bullet} onClick={onClick} />
          </div>
        ))}
    </div>
  );
};
