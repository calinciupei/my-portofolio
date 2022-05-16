import codecFactory from "../../factories/codec-factory";
import { GQLItemsResolvers } from "../../gql-types";

export const Items: GQLItemsResolvers = {
  __resolveType: ({ urn }) => {
    if (codecFactory.card.helloCard.isValid(urn)) {
      return "HelloCard";
    }

    if (codecFactory.card.articlesCard.isValid(urn)) {
      return "ArticlesCard";
    }

    return null;
  }
};
