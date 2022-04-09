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
  const [refTwo, inViewTwo] = useInView({ threshold: 0, delay: 100, trackVisibility: true });
  const [refThree, inViewThree] = useInView({ threshold: 0, delay: 100, trackVisibility: true });

  const bullets = [
    {
      isActive: inViewOne,
      section: "#about",
      imageAlt: "Calin Ciupei Profile",
      imageSrc: "/about.jpg"
    },
    {
      isActive: inViewTwo,
      section: "#experience",
      imageAlt: "Calin Ciupei Profile",
      imageSrc: "/experience.jpg"
    },
    {
      isActive: inViewThree,
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
        <section className={styles.section}>
          <div ref={refOne} className={styles.item}>
            {inViewOne && <HeroBanner />}
          </div>
        </section>

        <div ref={refExperience} />
        <section className={styles.section}>
          <div ref={refTwo} className={styles.item}>
            {inViewTwo && <Experience />}
          </div>
        </section>

        <div ref={refContact} />
        <section className={styles.section}>
          <div ref={refThree} className={styles.contact}>
            {inViewThree && <Contact />}
          </div>
        </section>
      </div>
    </>
  );
};

export default ConnectHome;
