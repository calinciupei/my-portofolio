import React, { FunctionComponent, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ComponentProps, HashSections } from "./props";
import HeroBanner from "../hero-banner";
import Experience from "../experience";
import Contact from "../contact";

import styles from "./connect-home.css";

const ConnectHome: FunctionComponent<ComponentProps> = ({ routeHash, offsetTop }) => {
  const refHero = useRef<HTMLDivElement>(null);
  const refExperience = useRef<HTMLDivElement>(null);
  const refContact = useRef<HTMLDivElement>(null);
  const [refOne, inViewOne] = useInView({ threshold: 0, delay: 100, trackVisibility: true });
  const [refTwo, inViewTwo] = useInView({ threshold: 0, delay: 200, trackVisibility: true });
  const [refThree, inViewThree] = useInView({ threshold: 0, delay: 100, trackVisibility: true });

  useEffect(() => {
    const positions = {
      [HashSections.Hero]: refHero.current?.offsetTop,
      [HashSections.Experience]: refExperience.current?.offsetTop,
      [HashSections.Contact]: refContact.current?.offsetTop
    };

    if (routeHash && positions[routeHash] != offsetTop) {
      setTimeout(() => {
        window.scrollTo({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          top: positions[routeHash],
          behavior: "smooth"
        });
      }, 200);
    }
  }, [routeHash, offsetTop]);

  return (
    <div id="homePage" className={styles.main}>
      <div ref={refHero} />
      <section ref={refOne} className={styles.section}>
        {inViewOne && <HeroBanner />}
      </section>

      <div ref={refExperience} />
      <section ref={refTwo} className={styles.section}>
        {inViewTwo && <Experience />}
      </section>

      <div ref={refContact} />
      <section ref={refThree} className={styles.section}>
        {inViewThree && (
          <div className={styles.contact}>
            <Contact />
          </div>
        )}
      </section>
    </div>
  );
};

export default ConnectHome;
