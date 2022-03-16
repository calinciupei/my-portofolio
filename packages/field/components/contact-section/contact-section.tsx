import React, { FunctionComponent, MouseEvent } from "react";
import classnames from "classnames";
import DOMPurify from "dompurify";
import { Button, SHAPE } from "baseui/button";

import styles from "./contact-section.css";

export type ContactClick = (event: MouseEvent<HTMLButtonElement>) => unknown;

export type ContactSection = {
  title: string;
  salute: string;
  text: string;
  label: string;
  onClick: ContactClick;
};

export const ContactSection: FunctionComponent<ContactSection> = ({ label, salute, text, title, onClick }) => {
  let defaultDelay = 0;
  const itemStyle = classnames(styles.item, styles.animate);

  const animationDelay = (): string => {
    defaultDelay += 200;

    return `${defaultDelay}ms`;
  };

  return (
    <div className={styles.contact}>
      <div className={`typography-h012 ${itemStyle}`} style={{ animationDelay: animationDelay() }}>
        <span className={styles.hesitate} dangerouslySetInnerHTML={{ __html: title }} />{" "}
        <span className={styles.hi} dangerouslySetInnerHTML={{ __html: salute }} />
      </div>
      <div className={itemStyle} style={{ animationDelay: animationDelay() }}>
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
      </div>
      <div className={itemStyle} style={{ animationDelay: animationDelay() }}>
        <Button onClick={onClick} shape={SHAPE.pill}>
          <span className={"typography-h22s"}>{label}</span>
        </Button>
      </div>
    </div>
  );
};
