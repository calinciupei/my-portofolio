import React, { FunctionComponent, useCallback } from "react";
import { Button, SHAPE } from "baseui/button";
import styles from "./hero.css";

export type HeroClick = () => void;

export type HeroProps = {
  imgSrc: string;
  onClick: HeroClick;
};

export const Hero: FunctionComponent<HeroProps> = ({ imgSrc, onClick }) => {
  let defaultDelay = 0;

  const animationDelay = (delay?: number): string => {
    if (delay) {
      return `${delay}ms`;
    }

    defaultDelay += 200;
    return `${defaultDelay}ms`;
  };

  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div className={styles.hero}>
      <div className={`${styles.content}`}>
        <div
          className={`typography-h010 ${styles.animation} ${styles.item}`}
          style={{ animationDelay: animationDelay() }}
        >
          Hi <span>👋</span>,
        </div>
        <div
          className={`typography-h012 ${styles.animation} ${styles.item}`}
          style={{ animationDelay: animationDelay() }}
        >
          It’s Călin,
        </div>
        <div className={styles.animation} style={{ animationDelay: animationDelay() }}>
          <p>
            I’m a front end developer specializing in building exceptional web experiences and occasionally designing.
          </p>
          <p>Problem solver with high attention to detail, interested in frontend and working with positive people.</p>
          <p>
            Fan of NFL, outdoor activities. A family person and proud father which is trying to achieve perfect dad
            jokes.
          </p>
        </div>

        <div className={styles.animation} style={{ animationDelay: animationDelay() }}>
          <Button onClick={handleClick} shape={SHAPE.pill}>
            <span className={"typography-h22s"}>Say hello!</span>
          </Button>
        </div>
      </div>
      <div className={`${styles.media} ${styles.animation}`} style={{ animationDelay: animationDelay() }}>
        <img className={styles.image} alt="portfolio" src={imgSrc} />
      </div>
    </div>
  );
};
