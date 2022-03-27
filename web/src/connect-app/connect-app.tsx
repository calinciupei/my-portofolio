import React, { FunctionComponent, Suspense, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { InitialState } from "@crew/types";
import { getCurrentRoute } from "@crew/store/store-selectors/routes";
import { PUSH, PushAction } from "@crew/store/actions/router";
import { Stylist } from "@crew/field";
import routes from "../../config/routing";
import NavigationMenu from "../navigation";
import NavigationControls from "../navigation-controls";
import Header from "../header";

import "../../assets/css/global.css";
import styles from "./connect-app.css";

const ConnectHelmet = React.lazy(
  () =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    import(/* webpackChunkName: "helmet-connect" */ "../connect-helmet/connect-helmet")
);

export type ConnectAppProps = {
  currentRoute: string;
};

function mapStateProps(state: InitialState): ConnectAppProps {
  const path = getCurrentRoute(state);

  return {
    currentRoute: path
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
            hash: window.location.hash
          }
        });
      }
    }

    async function resolveRoute(): Promise<void> {
      const router = routes();

      const result = router.resolve({
        pathname: currentRoute
      });

      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const item = await result;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setView(item);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn("BANG!!!!", e);
      }
    }

    if (currentRoute) void resolveRoute();
  }, [currentRoute, dispatch]);

  return (
    <Stylist>
      <Suspense fallback={<></>}>
        <ConnectHelmet />
      </Suspense>

      <Header />

      <NavigationMenu />

      {view}

      <div className={styles.menu} data-testid="navigation-bottom">
        <NavigationControls />
      </div>
    </Stylist>
  );
};

export default connect(mapStateProps)(ConnectApp);
