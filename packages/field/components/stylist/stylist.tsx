import React, { FunctionComponent, ReactNode } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";

import "../../assets/css/global.css";

export type StylistProps = {
  children: ReactNode;
};

const engine = new Styletron();

export const Stylist: FunctionComponent<StylistProps> = ({ children }) => {
  return <StyletronProvider value={engine}>{children}</StyletronProvider>;
};
