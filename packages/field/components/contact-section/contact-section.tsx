import React, { FunctionComponent, MouseEvent } from "react";
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
  return (
    <div className={styles.contact}>
      <div className={`typography-h012 ${styles.item}`}>
        <span className={styles.hesitate} dangerouslySetInnerHTML={{ __html: title }} />{" "}
        <span className={styles.hi} dangerouslySetInnerHTML={{ __html: salute }} />
      </div>
      <div className={styles.item}>
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
      </div>
      <div className={styles.item}>
        <Button onClick={onClick} shape={SHAPE.pill}>
          <span className={"typography-h22s"}>{label}</span>
        </Button>
      </div>
    </div>
  );
};
