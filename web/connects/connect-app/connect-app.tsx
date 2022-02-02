import React, { FunctionComponent, Suspense, useCallback, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { InitialState } from "@crew/types";
import { getCurrentRoute } from "@crew/store/store-selectors/routes";
import { PUSH, PushAction } from "@crew/store/actions/router";
import { FullScreenNavigation, Stylist } from "@crew/field";
import buildRouter from "../../config/routing";
import { BottomNavigation, BottomNavigationProps } from "@crew/field";

import "../../assets/css/global.css";
import styles from "./connect-app.css";

const ConnectHelmet = React.lazy(
  () =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    import(/* webpackChunkName: "helmet-connect" */ "../connect-helmet/connect-helmet")
);

export type ConnectAppProps = {
  currentRoute: string;
  bottomNavigation: BottomNavigationProps;
};

function mapStateProps(state: InitialState): ConnectAppProps {
  const path = getCurrentRoute(state);

  const bottomNavigation = (): BottomNavigationProps => ({
    github: "https://github.com/calinciupei",
    instagram: "",
    linkedin: "",
    twitter: ""
  });

  return {
    currentRoute: path,
    bottomNavigation: { ...bottomNavigation() }
  };
}

const ConnectApp: FunctionComponent<ConnectAppProps> = ({ currentRoute, bottomNavigation }) => {
  const dispatch = useDispatch();
  const [view, setView] = useState();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    if (!currentRoute) {
      if (global.window) {
        dispatch<PushAction>({
          type: PUSH,
          payload: {
            currentRoute: window.location.pathname,
            path: window.location.pathname
          }
        });
      }
    }

    function resolve(): void {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      const router = buildRouter();

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const result = router.resolve({
        pathname: currentRoute
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      result.then((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setView(item);
      });
    }

    if (currentRoute) resolve();
  }, [currentRoute, dispatch]);

  const handleMenuClick = useCallback((isOpened) => {
    setIsMenuOpened(!isOpened);
  }, []);

  return (
    <Stylist>
      <Suspense fallback={<></>}>
        <ConnectHelmet />
      </Suspense>

      <FullScreenNavigation isOpened={isMenuOpened} />

      {view}

      <div className={styles.menu}>
        <BottomNavigation {...bottomNavigation} onClick={handleMenuClick} />
      </div>
    </Stylist>
  );
};

export default connect(mapStateProps)(ConnectApp);
