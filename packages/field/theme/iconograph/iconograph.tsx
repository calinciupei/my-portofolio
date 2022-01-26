import React, { FunctionComponent } from "react";

import styles from "./iconograph.css";
import { Icons } from "../../components/icons/icons";

const catalogue = [
  <Icons.Lock key="Lock" />,
  <Icons.Menu key="Menu" />,
  <Icons.MenuOpened key="MenuOpened" />,
  <Icons.Arrow key="Un-Lock" />,
  <Icons.Facebook key="Facebook" color={Icons.FacebookColor.carbon} />,
  <Icons.Instagram key="Instagram" color={Icons.InstagramColor.Carbon} />,
  <Icons.Linkedin key="Linkedin" color={Icons.LinkedinColor.carbon} />,
  <Icons.Twitter key="Twitter" color={Icons.TwitterColor.carbon} />,
  <Icons.Youtube key="Youtube" color={Icons.YoutubeColor.carbon} />,
  <Icons.Phone key="Phone" color={Icons.PhoneColor.carbon} />,
  <Icons.At key="At" color={Icons.AtColor.carbon} />,
  <Icons.Clock key="Clock" color={Icons.ClockColor.carbon} />,
  <Icons.Chevron key="Clock" color={Icons.ChevronColor.carbon} />,
  <Icons.MapMarker key="Clock" color={Icons.MapMarkerColor.carbon} />,
  <Icons.Github key="Github" color={Icons.GithubColor.Carbon} />
];

const Iconograph: FunctionComponent = () => (
  <>
    <h1 className={styles.title}>Iconography</h1>
    <div className={styles.container}>
      {catalogue.map((Icon, idx) => {
        return (
          <div className={styles.iconContainer} key={idx}>
            <div className={styles.icon}>{Icon}</div>
            <span className="typography-h220">{Icon.key}</span>
          </div>
        );
      })}
    </div>
  </>
);

export default Iconograph;
