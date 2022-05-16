import { GQLHelloCardResolvers } from "lib/gql-types";

export const HelloCard: GQLHelloCardResolvers = {
  text: (item) => {
    // eslint-disable-next-line no-console
    console.log(item);

    return ["hello", "world", "!"];
  }
};
