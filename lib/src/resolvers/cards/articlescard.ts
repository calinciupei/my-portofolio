import { GQLArticlesCardResolvers } from "../../../gql-types";
import codeFactory from "../../../factories/codec-factory";

export const ArticlesCard: GQLArticlesCardResolvers = {
  articles: ({ urn }, _, { articleService }) => {
    let results = [];
    const { ids } = codeFactory.card.articlesCard.getQComponent(urn);

    if (ids?.length) {
      const idsNumbers: number[] = ids.split("|").map((num) => parseInt(num));
      results = articleService.getArticlesById(idsNumbers);

      return results;
    }

    return articleService.getArticles();
  }
};
