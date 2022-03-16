import React, { FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";
import { ConnectHomeProps } from "./props";
import HeroBanner from "../hero-banner";
import Experience from "../experience";
import Contact from "../contact";

import styles from "./connect-home.css";

const ConnectHome: FunctionComponent<ConnectHomeProps> = () => {
  const [refOne, inViewOne] = useInView({ threshold: 0.2, delay: 100, trackVisibility: true });
  const [refTwo, inViewTwo] = useInView({ threshold: 0.3, delay: 100, trackVisibility: true });
  const [refThree, inViewThree] = useInView({ threshold: 0.4, delay: 100, trackVisibility: true });

  return (
    <div ref={refOne} className={styles.main}>
      <section className={styles.section}>{inViewOne && <HeroBanner />}</section>

      <section ref={refTwo} className={styles.section}>
        {inViewTwo && <Experience />}
      </section>

      <section ref={refThree} className={styles.section}>
        {inViewThree && <Contact />}
      </section>
    </div>
  );
};

export default ConnectHome;
