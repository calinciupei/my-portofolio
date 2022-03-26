import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { StatefulTooltip } from "baseui/tooltip";
import { Icons } from "../icons/icons";
import styles from "./bullet-navigation.css";

export type BulletNavigationClick = (section: string) => void;

export type BulletNavigationProps = {
  isActive: boolean;
  section: string;
  imageSrc: string;
  imageAlt: string;
  onClick?: BulletNavigationClick;
};

const { CircleFull, CircleFullColor, CircleDot, CircleDotColors } = Icons;

export const BulletNavigation: FunctionComponent<BulletNavigationProps> = ({
  isActive,
  onClick,
  section,
  imageAlt,
  imageSrc
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFullCircle, setIsFullCircle] = useState<boolean>(isActive);

  useEffect(() => {
    setIsFullCircle(isActive);
  }, [isActive]);

  const handleClick = useCallback(() => {
    onClick && onClick(section);
  }, [onClick, section]);

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleFocus = (): void => {};

  const handleMouseOut = (): void => {
    setIsHovered(false);
  };

  const renderScreen = (): JSX.Element => (
    <div className={styles.img}>
      <img width={"100%"} src={imageSrc} alt={imageAlt} />
    </div>
  );

  return (
    <StatefulTooltip
      animateOutTime={0}
      content={() => {
        return renderScreen();
      }}
      returnFocus
      placement="right"
      showArrow={true}
      overrides={{
        Inner: {
          style: {
            paddingLeft: "2px",
            paddingTop: "2px",
            paddingRight: "2px",
            paddingBottom: "2px"
          }
        }
      }}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
    >
      <div className={styles.bullet}>
        <button
          className={styles.bullet}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOut}
          onFocus={handleFocus}
          onBlur={handleFocus}
        >
          {(isHovered || isFullCircle) && <CircleFull color={CircleFullColor.Carbon} />}
          {!isHovered && !isFullCircle && <CircleDot color={CircleDotColors.Carbon} />}
        </button>
      </div>
    </StatefulTooltip>
  );
};
