import React, { FunctionComponent } from "react";
import { Hero } from "@crew/field";
import { ComponentProps } from "./props";

const HeroBanner: FunctionComponent<ComponentProps> = ({ heroProps, dispatchResumeDownload }) => {
  const handleClick = (): void => {
    dispatchResumeDownload();
  };

  return <Hero {...heroProps} onClick={handleClick} />;
};

export default HeroBanner;
