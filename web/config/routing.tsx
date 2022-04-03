import React, { ComponentType, ReactNode, Suspense } from "react";
import UniversalRouter from "universal-router";

export const ROUTES = {
  HOME: "/"
};

export const PAGE_NAMES = {
  [ROUTES.HOME]: "Home"
};

const Home = React.lazy(
  () =>
    import(/* webpackChunkName: "home-page" */ "../src/connect-home") as unknown as Promise<{
      default: ComponentType<ReactNode>;
    }>
);

const FourZeroFour = React.lazy(
  () =>
    import(/* webpackChunkName: "404-page" */ "../src/404") as unknown as Promise<{
      default: ComponentType<ReactNode>;
    }>
);

const routes = (): UniversalRouter =>
  new UniversalRouter(
    [
      {
        path: `${ROUTES.HOME}`,
        action() {
          return (
            <Suspense fallback={<>Loading....</>}>
              <Home />
            </Suspense>
          );
        }
      }
    ],
    {
      errorHandler() {
        return (
          <Suspense fallback={<>Loading....</>}>
            <FourZeroFour />
          </Suspense>
        );
      }
    }
  );

export default routes;
