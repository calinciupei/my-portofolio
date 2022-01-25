import React, {
  FunctionComponent
} from "react";
import { connect } from "react-redux";
import { InitialState } from "@crew/types";

import styles from "./connect-home.css";

export type ConnectHomeProps = Record<string, unknown>;

function mapStateToProps(): ConnectHomeProps {
  return {};
}

const ConnectHome: FunctionComponent<ConnectHomeProps> = () => {
  return (
    <div className={styles.main}>
      Hi! How are you?
    </div>
  );
};

export default connect<
  ConnectHomeProps,
  Record<string, never>,
  Record<string, unknown>,
  InitialState
>(mapStateToProps)(ConnectHome);
