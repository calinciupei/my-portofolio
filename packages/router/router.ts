import UniversalRouter, { Routes, RouterOptions } from "universal-router";

const Router = (routes: Routes, options?: RouterOptions): UniversalRouter =>
  new UniversalRouter(routes, options);

export default Router;
