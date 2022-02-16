import React, { FunctionComponent } from "react";
import DOMPurify from "dompurify";
import { Button, SHAPE } from "baseui/button";
import { Upload } from "baseui/icon";
import styles from "./hero.css";

export type HeroClick = () => void;

export type HeroProps = {
  salute: string;
  name: string;
  paragraph: string;
  paragraphOne: string;
  paragraphTwo: string;
  buttonLabel: string;
  imgSrc: string;
  onClick: HeroClick;
};

export const Hero: FunctionComponent<HeroProps> = ({
  imgSrc,
  buttonLabel,
  name,
  paragraph,
  paragraphOne,
  paragraphTwo,
  salute,
  onClick
}) => {
  let defaultDelay = 0;

  const animationDelay = (): string => {
    defaultDelay += 200;

    return `${defaultDelay}ms`;
  };

  return (
    <div className={styles.hero} data-testid="hero-section">
      <div className={`${styles.content}`}>
        <div
          className={`typography-h010 ${styles.animation} ${styles.item}`}
          style={{ animationDelay: animationDelay() }}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(salute) }}
        />

        <div
          className={`typography-h012 ${styles.animation} ${styles.item}`}
          style={{ animationDelay: animationDelay() }}
          dangerouslySetInnerHTML={{ __html: name }}
        />

        <div className={`${styles.animation} ${styles.text}`} style={{ animationDelay: animationDelay() }}>
          <p dangerouslySetInnerHTML={{ __html: paragraph }} />

          <p dangerouslySetInnerHTML={{ __html: paragraphOne }} />

          <p dangerouslySetInnerHTML={{ __html: paragraphTwo }} />
        </div>

        <div className={styles.animation} style={{ animationDelay: animationDelay() }}>
          <Button onClick={onClick} shape={SHAPE.pill} endEnhancer={() => <Upload size={24} />}>
            <span className={"typography-h22s"} dangerouslySetInnerHTML={{ __html: buttonLabel }} />
          </Button>
        </div>
      </div>

      <div className={`${styles.media} ${styles.animation}`} style={{ animationDelay: animationDelay() }}>
        <img className={styles.image} alt="portfolio" src={imgSrc} />
      </div>
    </div>
  );
};
