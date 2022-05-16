import { GQLResolvers } from "lib/gql-types";
import { HelloCard } from "./cards/hellocard";
import { ArticlesCard } from "./cards/articlecard";
import { Items } from "./items";
import { Query } from "./query-resolver";

export const resolvers: GQLResolvers = {
  ArticlesCard,
  HelloCard,
  Items,
  Query
};
