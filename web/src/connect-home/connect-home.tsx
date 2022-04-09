import React, { FunctionComponent, useCallback, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ComponentProps, HashSections } from "./props";
import HeroBanner from "../hero-banner";
import Experience from "../experience";
import Contact from "../contact";

import styles from "./connect-home.css";
import { BulletsNavigation } from "@crew/field";

const ConnectHome: FunctionComponent<ComponentProps> = ({ routeHash, offsetTop, dispatchCurrentPosition }) => {
  const refHero = useRef<HTMLDivElement>(null);
  const refExperience = useRef<HTMLDivElement>(null);
  const refContact = useRef<HTMLDivElement>(null);
  const experiencePosition = refExperience.current?.offsetTop || 0;
  const contactPosition = refContact.current?.offsetTop || 0;
  const [refOne, inViewOne] = useInView({ threshold: 0, delay: 100, trackVisibility: true });
  const [refTwo, inViewTwo] = useInView({ threshold: 0.1, delay: 100, trackVisibility: true });
  const [refThree, inViewThree] = useInView({ threshold: 0.2, delay: 100, trackVisibility: true });

  const bullets = [
    {
      isActive: window.scrollY < experiencePosition,
      section: "#about",
      imageAlt: "Calin Ciupei Profile",
      imageSrc: "/about.jpg"
    },
    {
      isActive: experiencePosition <= window.scrollY && window.scrollY < contactPosition,
      section: "#experience",
      imageAlt: "Calin Ciupei Profile",
      imageSrc: "/experience.jpg"
    },
    {
      isActive: window.scrollY >= contactPosition,
      section: "#contact",
      imageAlt: "Calin Ciupei Profile",
      imageSrc: "/contact.jpg"
    }
  ];

  useEffect(() => {
    const positions = {
      [HashSections.Hero]: refHero.current?.offsetTop,
      [HashSections.Experience]: refExperience.current?.offsetTop,
      [HashSections.Contact]: refContact.current?.offsetTop
    };

    if (routeHash && positions[routeHash] != offsetTop) {
      setTimeout(() => {
        window.scrollTo({
          top: positions[routeHash],
          behavior: "smooth"
        });
      }, 200);
    }
  }, [routeHash, offsetTop]);

  const handleBulletClick = useCallback(
    (section: string) => {
      dispatchCurrentPosition(window.scrollY);
      window.location.href = `${window.location.origin}/${section}`;
    },
    [dispatchCurrentPosition]
  );

  return (
    <>
      <div className={styles.bullets}>
        <BulletsNavigation bullets={bullets} onClick={handleBulletClick} />
      </div>
      <div id="homePage" className={styles.main}>
        <div ref={refHero} />
        <section ref={refOne} className={styles.section}>
          {inViewOne && (
            <div className={styles.item}>
              <HeroBanner />
            </div>
          )}
        </section>

        <div ref={refExperience} />
        <section ref={refTwo} className={styles.section}>
          {inViewTwo && (
            <div className={styles.item}>
              <Experience />
            </div>
          )}
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
    </>
  );
};

export default ConnectHome;
