import React, { FunctionComponent, useCallback } from "react";
import { Button, SHAPE } from "baseui/button";

import styles from "./contact-section.css";

export type ContactClick = (e: MouseEvent) => void;

export type ContactSection = {
  onClick: ContactClick;
};

export const ContactSection: FunctionComponent<ContactSection> = ({ onClick }) => {
  const handleClick = useCallback(
    (e) => {
      onClick(e);
    },
    [onClick]
  );

  return (
    <div className={styles.contact}>
      <div className={`typography-h012 ${styles.item}`}>
        <span className={styles.hesitate}>Don&apos;t hesitate to say</span> <span className={styles.hi}>Hi</span>
      </div>
      <div className={styles.item}>
        <p>
          Whether you have a question or just want to get in touch don&apos;t hesitate to write, and I&apos;ll try my
          best to get back to you.
        </p>
      </div>
      <div className={styles.item}>
        <Button onClick={handleClick} shape={SHAPE.pill}>
          <span className={"typography-h22s"}>Say hello 👋</span>
        </Button>
      </div>
    </div>
  );
};
