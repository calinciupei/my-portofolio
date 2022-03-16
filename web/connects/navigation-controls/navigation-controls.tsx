import React, { FunctionComponent } from "react";
import { ComponentProps } from "./props";
import { BottomNavigation } from "@crew/field";

const NavigationControls: FunctionComponent<ComponentProps> = ({ dispatchMenuClick, isOpen, socials }) => {
  const handleClick = (): void => {
    dispatchMenuClick(isOpen);
  };

  return <BottomNavigation {...socials} onClick={handleClick} />;
};

export default NavigationControls;
