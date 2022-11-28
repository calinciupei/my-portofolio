import { join } from "path";
import { existsSync } from "fs";
import { graphqlHTTP } from "express-graphql";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import setArticleService from "./../services/articles";
import { GQLContext } from "./../context";
import { resolvers } from "../src/resolvers";

const schemaPath = (): string => {
  if (existsSync(join(__dirname, "./../../../lib/schema.graphql"))) {
    return join(__dirname, "./../../../lib/schema.graphql");
  } else {
    return join(__dirname, "./../../../../lib/schema.graphql");
  }
};

const schema = loadSchemaSync(schemaPath(), {
  loaders: [new GraphQLFileLoader()]
});

const schemaWithResolver = addResolversToSchema({
  schema,
  resolvers
});

const articleService = setArticleService();

const schemaContext: GQLContext = {
  articleService
};

export const SchemaGraphQL = graphqlHTTP({
  schema: schemaWithResolver,
  graphiql: true,
  context: schemaContext
});
