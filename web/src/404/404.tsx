import React, { FunctionComponent } from "react";
import { ComponentProps } from "./props";
import DOMPurify from "dompurify";

import styles from "./404.css";

const FourZeroFour: FunctionComponent<ComponentProps> = ({ content }) => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <span className={"typography-h180"} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
      </div>
    </div>
  );
};

export default FourZeroFour;
