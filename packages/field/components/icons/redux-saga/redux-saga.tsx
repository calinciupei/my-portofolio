import React, { FunctionComponent } from "react";
import styles from "./redux-saga.css";
import classnames from "classnames";

export enum ReduxSagaColor {
  Carbon = "carbon"
}

export type ReduxSagaProps = {
  color: ReduxSagaColor;
};

export const ReduxSaga: FunctionComponent<ReduxSagaProps> = ({ color }) => {
  const classes = classnames(styles.icon, {
    [styles.carbon]: color === ReduxSagaColor.Carbon
  });

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 157" className={classes}>
      <path d="M130.005 96.227c0 5.271-3.92 9.624-9.004 10.307c-6.027 14.049-18.302 27.755-35.12 37.465c-14.115 8.15-29.073 12.126-42.49 12.126c-17.063 0-31.636-6.43-38.826-18.883c-11.677-20.224-.3-48.444 26.667-67.513c.001 4.356.342 8.35 1.105 11.894c-2.176 1.835-4.153 3.406-6.083 5.43c-4.966 5.205-8.936 10.599-11.652 16.358c-5.066 10.742-5.409 20.896-.965 28.593c5.007 8.672 15.852 13.645 29.754 13.645c12.047 0 25.276-3.808 37.252-10.722c6.974-4.026 13.175-8.861 18.43-14.372c4.967-5.206 8.862-10.766 11.578-16.525c.237-.502.46-1.002.675-1.5a10.357 10.357 0 0 1-2.127-6.303c0-5.745 4.657-10.403 10.403-10.403s10.403 4.658 10.403 10.403zM83.578 0c23.227 0 42.478 24.543 45.95 56.62a64.716 64.716 0 0 0-11.387-5.425a77.627 77.627 0 0 0-1.76-7.298c-2.026-6.904-4.893-13.057-8.523-18.29c-6.77-9.757-15.393-15.131-24.28-15.131c-8.888 0-17.51 5.374-24.28 15.132c-3.63 5.232-6.497 11.385-8.523 18.289c-2.144 7.307-3.231 15.095-3.231 23.147c0 8.052 1.087 15.84 3.23 23.146c2.027 6.904 4.894 13.057 8.524 18.29c.376.541.758 1.07 1.145 1.584a10.45 10.45 0 0 1 1.912-.178c5.746 0 10.403 4.658 10.403 10.403s-4.657 10.403-10.403 10.403s-10.403-4.658-10.403-10.403c0-1.176.198-2.306.558-3.36c-9.478-12.274-15.442-30.074-15.442-49.885C37.068 30.016 57.891 0 83.578 0zm40.087 145.647c12.757 0 22.94-4.188 28.399-11.578c3.174 1.678 6.702 2.698 10.426 3.216c-7.231 12.315-21.86 18.838-38.825 18.838c-10.491 0-21.922-2.43-33.157-7.386c4.372-2.415 8.245-4.748 11.114-6.917c7.426 2.503 14.94 3.827 22.043 3.827zm17.212-58.763c-5.256-5.511-11.457-10.346-18.43-14.372c-11.976-6.915-25.205-10.723-37.25-10.723c-2.633 0-5.156.179-7.55.527l-.18.03c-1.088 4.582-5.204 7.993-10.12 7.993c-5.745 0-10.403-4.658-10.403-10.403c0-5.746 4.658-10.404 10.403-10.404c2.698 0 5.156 1.027 7.004 2.712l.042-.009c3.447-.612 7.065-.921 10.801-.921c13.419-.001 28.373 3.975 42.49 12.126c23.226 13.41 37.805 34.44 39.198 53.47c-4.218-.475-7.788-1.874-11.07-3.684c-.659-3.178-1.78-6.469-3.358-9.817c-2.716-5.76-6.611-11.32-11.577-16.525z"></path>
      <path d="M247.01 71.082c4.608 6.94-4.777 12.369-8.98 5.39c-2.561-4.373-6.49-8.463-11.642-12.036c-5.232-3.63-11.386-6.497-18.289-8.523c-7.307-2.144-15.095-3.231-23.147-3.231c-8.052 0-15.84 1.087-23.147 3.231a73.27 73.27 0 0 0-3.693 1.194c-.15 5.615-4.745 10.122-10.397 10.122c-5.745 0-10.403-4.658-10.403-10.403c0-5.746 4.658-10.404 10.403-10.404c1.912 0 3.702.518 5.241 1.418c9.51-3.59 20.408-5.634 31.996-5.634c28.03 0 52.043 11.934 62.057 28.876zm8.746 25.145c0 5.217-3.84 9.536-8.846 10.287c-10.073 16.855-34.019 28.712-61.958 28.712c-21.818 0-41.201-7.23-53.444-18.424c-5.922-5.953 1.206-12.87 6.73-8.038a47.027 47.027 0 0 0 5.278 4.232c5.233 3.63 11.386 6.497 18.29 8.523c7.306 2.144 15.094 3.231 23.146 3.231c8.052 0 15.84-1.087 23.147-3.23c6.903-2.027 13.057-4.894 18.289-8.524c4.54-3.15 8.127-6.7 10.67-10.492a10.356 10.356 0 0 1-2.11-6.277c0-5.745 4.659-10.403 10.405-10.403c5.745 0 10.403 4.658 10.403 10.403z"></path>
    </svg>
  );
};