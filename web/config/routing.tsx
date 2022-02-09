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
    import(/* webpackChunkName: "home-page" */ "../connects/connect-home/connect-home") as Promise<{
      default: ComponentType<ReactNode>;
    }>
);

const buildRouter = (): UniversalRouter =>
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
        return <>Oops! Something went wrong</>;
      }
    }
  );

export default buildRouter;
