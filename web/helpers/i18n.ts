import i18next from "i18next";
import { TranslationsKey } from "../translations/key";

type TranslateArguments = {
  key: keyof TranslationsKey;
  interpolationValues?: {
    [key: string]: string;
  };
};

export const i18n = ({ key, interpolationValues = {} }: TranslateArguments): string => {
  return i18next.t(key, interpolationValues);
};
