export type SwapiRequestPayload = {
  id?: number;
  params?: SwapiRequestQueryParams;
  path?: string;
};

export type SwapiRequestQueryParams = {
  search: string;
  page?: number;
};

export type SwapiReqestFailure = {
  error?: string;
};
