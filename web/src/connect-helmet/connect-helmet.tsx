import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import { InitialState } from "@crew/types";
import { getCurrentPath } from "@crew/store/store-selectors/routes";
import { PAGE_NAMES } from "../../config/routing";

export type ConnectHelmetProps = {
  path: string;
};

function mapStateProps(state: InitialState): ConnectHelmetProps {
  const path = getCurrentPath(state);

  return {
    path
  };
}

const ConnectHelmet: FunctionComponent<ConnectHelmetProps> = ({ path }) => {
  const title = PAGE_NAMES[path];
  const description =
    "Hi I'm Calin Ciupei a front end developer specializing in building exceptional web experiences and occasionally designing.";

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title> {`${title} | by calinciupei@gmail.com`}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default connect(mapStateProps)(ConnectHelmet);
