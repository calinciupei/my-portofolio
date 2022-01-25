import React, { FunctionComponent, Suspense, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { InitialState } from "@crew/types";
import { getCurrentRoute } from "@crew/store/store-selectors/routes";
import { PUSH, PushAction } from "@crew/store/actions/router";
import { Stylist } from "@crew/field";
import buildRouter from "../../config/routing";

import "../../assets/css/global.css";

const ConnectHelmet = React.lazy(
  () =>
    import(
      /* webpackChunkName: "helmet-connect" */ "../connect-helmet/connect-helmet"
    )
);

export type ConnectAppProps = {
  currentRoute: string;
};

function mapStateProps(state: InitialState): ConnectAppProps {
  const path = getCurrentRoute(state);

  return {
    currentRoute: path,
  };
}

const ConnectApp: FunctionComponent<ConnectAppProps> = ({ currentRoute }) => {
  const dispatch = useDispatch();
  const [view, setView] = useState();

  useEffect(() => {
    if (!currentRoute) {
      if (global.window) {
        dispatch<PushAction>({
          type: PUSH,
          payload: {
            currentRoute: window.location.pathname,
            path: window.location.pathname,
          },
        });
      }
    }

    function resolve(): void {
      const router = buildRouter();

      const result = router.resolve({
        pathname: currentRoute,
      });

      result.then((item) => {
        setView(item);
      });
    }

    if (currentRoute) resolve();
  }, [currentRoute, dispatch]);

  return (
    <Stylist>
      <Suspense fallback={<></>}>
        <ConnectHelmet />
      </Suspense>

      {view}
    </Stylist>
  );
};

export default connect(mapStateProps)(ConnectApp);
