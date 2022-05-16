import { GQLQueryResolvers } from "lib/gql-types";

export const Query: GQLQueryResolvers = {
  Cards: (_, { cardsURN }) => {
    return cardsURN.map((urn) => ({ urn }));
  },
  Search: (_, { query }) => {
    return {
      query,
      pageResults: 0,
      startIndex: 0
    };
  }
};
