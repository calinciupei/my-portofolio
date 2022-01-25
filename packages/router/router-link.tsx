import React, {
  FunctionComponent,
  MouseEventHandler,
  useCallback,
} from "react";
import { useDispatch } from "react-redux";
import { PUSH } from "./router-actions";

export type RouterLinkProps = {
  href?: string;
  onClickCallBack?: Function;
};

const RouterLink: FunctionComponent<RouterLinkProps> = ({
  href,
  onClickCallBack = () => {},
  children,
}) => {
  const dispatch = useDispatch();

  const onClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (event): void => {
      event.preventDefault();

      dispatch({
        type: PUSH,
        payload: { path: href },
      });
      onClickCallBack();
    },
    [dispatch, href, onClickCallBack]
  );

  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default RouterLink;
