import { ArticlesService } from "./services/articles";

export type HelloCard = {
  urn: URN;
  text: [string];
};

export type ArticleCard = {
  id: number;
  name: string;
  title: string;
  subTitle: string;
  content: string;
};

export type ArticlesCard = {
  urn: URN;
  articles: ArticleCard[];
};

export type URN = {
  readonly type: URNType;
  readonly uid: string;
};

export enum URNType {
  HelloCard = "urn:card:hello",
  ArticlesCard = "urn:card:articles"
}

export type GQLContext = {
  hello?: HelloCard;
  articleService: ArticlesService;
};
