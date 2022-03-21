import React, { FunctionComponent } from "react";
import { ComponentProps } from "./props";
import { BottomNavigation } from "@crew/field";

const NavigationControls: FunctionComponent<ComponentProps> = ({ dispatchMenuClick, socials }) => {
  const handleClick = (): void => {
    dispatchMenuClick(socials.isOpened);
  };

  return <BottomNavigation {...socials} onClick={handleClick} />;
};

export default NavigationControls;
