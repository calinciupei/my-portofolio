import React, { FunctionComponent, useEffect, useState } from "react";
import { Colors } from "baseui/theme";
import { ProgressBar } from "baseui/progress-bar";
import { useInterval } from "../../hooks/use-interval";

import styles from "./progress-line.css";

export enum ProgressColor {
  Blue = "blue",
  Red = "red",
  Green = "green"
}

export type ProgressLineProps = {
  delay: number | null;
  progress: number;
  label: string;
  color: ProgressColor;
};

export const ProgressLine: FunctionComponent<ProgressLineProps> = ({ delay, progress, label, color }) => {
  const [value, setValue] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (value === progress) {
      setStop(true);
    } else {
      setStop(false);
    }
  }, [value, progress]);

  useInterval(
    () => {
      setValue(progress);
    },
    stop ? null : delay
  );

  const getProgressColor = (colors: Colors) => {
    switch (color) {
      case ProgressColor.Blue:
        return colors.contentAccent;
      case ProgressColor.Green:
        return colors.contentPositive;
      case ProgressColor.Red:
        return colors.contentNegative;
      default:
        return colors.contentAccent;
    }
  };

  return (
    <>
      <div className={`${styles.label} typography-h510`}>{label}</div>
      <div className={styles.item}>
        <ProgressBar
          value={value}
          overrides={{
            BarContainer: {
              style: () => ({
                marginLeft: 0
              })
            },
            BarProgress: {
              style: ({ $theme }) => {
                const color = getProgressColor($theme.colors);

                return { backgroundColor: color };
              }
            }
          }}
        />
      </div>
    </>
  );
};
