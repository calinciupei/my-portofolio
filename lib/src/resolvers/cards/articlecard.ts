import { GQLArticlesCardResolvers } from "../../../gql-types";

export const ArticlesCard: GQLArticlesCardResolvers = {
  articles: (__, _, { articleService }) => {
    return articleService.getArticles();
  }
};
