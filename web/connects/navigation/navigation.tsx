import React, { FunctionComponent } from "react";
import { FullScreenNavigation } from "@crew/field";
import { ComponentProps } from "./props";

const NavigationMenu: FunctionComponent<ComponentProps> = ({ navigation }) => {
  return <FullScreenNavigation {...navigation} />;
};

export default NavigationMenu;
