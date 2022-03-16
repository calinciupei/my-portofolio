import React, { FunctionComponent, ReactNode } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, LightTheme } from "baseui";

import "../../assets/css/global.css";

export type StylistProps = {
  children: ReactNode;
};

const engine = new Styletron();

export const Stylist: FunctionComponent<StylistProps> = ({ children }) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider
        overrides={{
          AppContainer: {
            style: {
              width: "100%",
              height: "100%"
            }
          }
        }}
        theme={LightTheme}
      >
        {children}
      </BaseProvider>
    </StyletronProvider>
  );
};
