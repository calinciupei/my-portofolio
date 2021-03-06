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
  <Icons.Github key="Github" color={Icons.GithubColor.Carbon} />,
  <Icons.ReactIcon key="ReactIcon" color={Icons.ReactColor.Carbon} />,
  <Icons.Angular key="Angular" color={Icons.AngularColor.Carbon} />,
  <Icons.Javascript key="Javascript" color={Icons.JavascriptColor.Carbon} />,
  <Icons.Css key="Css3" color={Icons.CssColor.Carbon} />,
  <Icons.Html5 key="Html5" color={Icons.Html5Color.Carbon} />,
  <Icons.Typescript key="Typescript" color={Icons.TypescriptColor.Carbon} />,
  <Icons.Redux key="Redux" color={Icons.ReduxColor.Carbon} />,
  <Icons.ReduxSaga key="ReduxSaga" color={Icons.ReduxSagaColor.Carbon} />,
  <Icons.Firebase key="Firebase" color={Icons.FirebaseColor.Carbon} />,
  <Icons.Jenkins key="Jenkins" color={Icons.JenkinsColor.Carbon} />,
  <Icons.Node key="Node" color={Icons.NodeColor.Carbon} />,
  <Icons.Express key="express" color={Icons.ExpressColor.Carbon} />,
  <Icons.Jest key="Jest" color={Icons.JestColor.Carbon} />,
  <Icons.Graphql key="Graphql" color={Icons.GraphqlColor.Carbon} />,
  <Icons.Sass key="Graphql" color={Icons.SassColor.Carbon} />,
  <Icons.CircleFull key="Circle Full" color={Icons.CircleFullColor.Carbon} />,
  <Icons.CircleDot key="Circle Dot" color={Icons.CircleDotColors.Carbon} />
];

const Iconograph: FunctionComponent = () => (
  <>
    <h1 className={styles.title}>Iconographic</h1>
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
