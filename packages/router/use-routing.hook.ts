import { useEffect, useState } from "react";
import UniversalRouter from "universal-router";
import { useDispatch } from "react-redux";
import { PUSH } from "./router-actions";

type Routing = {
  component: JSX.Element | null;
  pageTitle: { [metadata: string]: any } | null;
};

const useRouting = (
  router: UniversalRouter,
  currentRoute: string | null
): Routing => {
  const [routeComponent, setRouteComponent] = useState<JSX.Element | null>(
    null
  );
  const [pageTitle, setPageTitle] = useState(null);
  const dispatch = useDispatch();

  if (!currentRoute && global.window) {
    dispatch({
      type: PUSH,
      payload: { path: window.location.pathname },
    });
  }

  useEffect(() => {
    let ignore = false;

    async function resolveRoute(route: string): Promise<void> {
      const { component, pageTitle = "", redirect } = await router.resolve(
        route
      );

      if (redirect) {
        dispatch({ type: PUSH, payload: { path: router.baseUrl + redirect } });
      } else if (!ignore) {
        if (pageTitle) setPageTitle(pageTitle);

        setRouteComponent(component);
      }
    }

    if (currentRoute) resolveRoute(currentRoute);

    return () => {
      ignore = true;
    };
  }, [currentRoute, router, dispatch]);

  return { component: routeComponent, pageTitle };
};

export default useRouting;
