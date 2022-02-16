import React, { FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";
import { Hero, SkillsExperience } from "@crew/field";
import { ConnectHomeProps } from "./props";

import styles from "./connect-home.css";

const ConnectHome: FunctionComponent<ConnectHomeProps> = () => {
  const [refOne, inViewOne] = useInView({ threshold: 0.2, delay: 100, trackVisibility: true });
  const [refTwo, inViewTwo] = useInView({ threshold: 0.3, delay: 100, trackVisibility: true });
  const handleResumeClick = (): void => {};

  return (
    <div className={styles.main}>
      <section ref={refOne} className={styles.section}>
        {inViewOne && <Hero onClick={handleResumeClick} imgSrc="/cc-portfolio.png" />}
      </section>

      <section ref={refTwo} className={styles.section}>
        {inViewTwo && <SkillsExperience />}
      </section>
    </div>
  );
};

export default ConnectHome;
