export type Endpoints = {
  314: URL;
};

let ENDPOINTS: Endpoints | undefined;

export function setEndpoints(endpoints: Endpoints): void {
  ENDPOINTS = endpoints;
}

export function getEndpoint(service: keyof Endpoints): URL {
  if (!ENDPOINTS || !ENDPOINTS[service]) {
    throw new Error("No endpoint available");
  }

  return ENDPOINTS[service];
}
