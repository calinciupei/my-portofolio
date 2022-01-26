import React, { FunctionComponent, MouseEvent, useCallback } from "react";
import classnames from "classnames";

import styles from "./button.css";

export type ButtonOnClick = (event: MouseEvent) => void;

export enum ButtonVariant {
  PRIMARY = "primary"
}

export enum ButtonWidth {
  LARGE = "large"
}

export enum ButtonType {
  SUBMIT = "submit"
}

export type ButtonProps = {
  variant: ButtonVariant;
  width?: ButtonWidth;
  onClick?: ButtonOnClick;
  type?: ButtonType;
};

export const Button: FunctionComponent<ButtonProps> = ({ children, onClick, variant, width }) => {
  const stylesClass = classnames(styles.button, {
    [styles.primary]: variant === ButtonVariant.PRIMARY,
    [styles.large]: width === ButtonWidth.LARGE,
    "typography-h320": true
  });

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (onClick) {
        onClick(event);
      }
    },
    [onClick]
  );

  return (
    <button className={stylesClass} onClick={handleClick}>
      {children}
    </button>
  );
};
