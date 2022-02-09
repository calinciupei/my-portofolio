import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { useInView } from "react-intersection-observer";
import { InitialState } from "@crew/types";
import { Hero, SkillsExperience } from "@crew/field";

import styles from "./connect-home.css";

export type ConnectHomeProps = Record<string, unknown>;

function mapStateToProps(): ConnectHomeProps {
  return {};
}

const ConnectHome: FunctionComponent<ConnectHomeProps> = () => {
  const [refOne, inViewOne] = useInView({ threshold: 0.2, delay: 200, trackVisibility: true });
  const [refTwo, inViewTwo] = useInView({ threshold: 0.3, delay: 200, trackVisibility: true });
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

export default connect<ConnectHomeProps, Record<string, never>, Record<string, unknown>, InitialState>(mapStateToProps)(
  ConnectHome
);
