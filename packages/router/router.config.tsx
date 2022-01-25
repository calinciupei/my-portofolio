import React from "react";
import UniversalRouter, { Routes, RouterOptions } from "universal-router";
import ConnectHome from "@crew/web/connects/connect-home/connect-home";
import { ROUTES, PAGE_NAMES } from "@crew/web/router/routes";

const Router = (routes: Routes, options?: RouterOptions): UniversalRouter =>
  new UniversalRouter(routes, options);

const routes = Router([
  {
    path: ROUTES.HOME,
    action(ctx) {
      const homePage = () => <ConnectHome />;
      return {
        component: homePage,
        pageTitle: { title: PAGE_NAMES[ctx.path] },
      };
    },
  },
]);

export default routes;
