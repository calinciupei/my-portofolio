import { Endpoints } from "@crew/types/configs/endpoints";

export function buildProxyBaseUrl(): string {
  const baseHref =
    document.getElementsByName("base")[0]?.getAttribute("href") || "";

  return `${window.location.origin}${baseHref}`;
}

export const ENDPOINTS: Endpoints = {
  314: new URL("", buildProxyBaseUrl()),
};
