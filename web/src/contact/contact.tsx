import React, { FunctionComponent, useCallback } from "react";
import { ContactSection } from "@crew/field";
import { ComponentProps } from "./props";

const Contact: FunctionComponent<ComponentProps> = ({ contact, dispatchContactMail }) => {
  const handleClick = useCallback(() => {
    dispatchContactMail();
  }, [dispatchContactMail]);

  return <ContactSection {...contact} onClick={handleClick} />;
};

export default Contact;
