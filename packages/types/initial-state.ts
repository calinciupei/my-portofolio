import { OrderState } from "./entities/order";
import { Layout } from "./layout-state";

export type PageState = {
  title: string;
  description: string;
};

export type RouterState = {
  currentRoute: string;
  page?: PageState | null;
  path?: string;
};

export type InitialState = {
  router: RouterState;
  page: PageState;
  layout: Layout;
  orders: OrderState;
};
