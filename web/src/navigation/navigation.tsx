import React, { FunctionComponent } from "react";
import { FullScreenNavigation } from "@crew/field";
import { ComponentProps } from "./props";

const NavigationMenu: FunctionComponent<ComponentProps> = ({
  navigation,
  dispatchHideNavigationMenu,
  dispatchCurrentPosition
}) => {
  const handleClick = (): void => {
    dispatchHideNavigationMenu();
    dispatchCurrentPosition(window.scrollY);
  };

  return <FullScreenNavigation {...navigation} onClick={handleClick} />;
};

export default NavigationMenu;
