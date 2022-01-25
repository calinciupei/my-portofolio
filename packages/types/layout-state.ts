export type Modal = {
  isOpen: boolean;
  title: string;
};

export type MenuNavigation = {
  isOpen: boolean;
};

export type Layout = {
  readonly modal?: Modal;
  readonly menuNavigation?: MenuNavigation;
};
