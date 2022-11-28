import { URNType } from "./context";
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import { GQLContext } from "./context";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  URN: URNType;
};

/** Represents Card related to a article */
export type GQLArticleCard = {
  __typename?: "ArticleCard";
  /** Article content */
  content?: Maybe<Scalars["String"]>;
  /** Article id */
  id: Scalars["Int"];
  /** Article name */
  name: Scalars["String"];
  /** Article title */
  subTitle: Scalars["String"];
  /** Article title */
  title: Scalars["String"];
};

/** Represents a list of article cards */
export type GQLArticlesCard = GQLCard & {
  __typename?: "ArticlesCard";
  /** List of articles */
  articles?: Maybe<Array<Maybe<GQLArticleCard>>>;
  /** Articles URN */
  urn: Scalars["URN"];
};

export type GQLCard = {
  urn: Scalars["URN"];
};

export type GQLHelloCard = GQLCard & {
  __typename?: "HelloCard";
  /** List of texts */
  text?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Hello card URN */
  urn: Scalars["URN"];
};

export type GQLItems = GQLArticlesCard | GQLHelloCard;

export type GQLQuery = {
  __typename?: "Query";
  Cards?: Maybe<Array<Maybe<GQLItems>>>;
  /** Search through articles */
  Search: GQLSearchResults;
};

export type GQLQueryCardsArgs = {
  cardsURN: Array<Scalars["URN"]>;
};

export type GQLQuerySearchArgs = {
  query: Scalars["String"];
};

/** Search results */
export type GQLSearchResults = {
  __typename?: "SearchResults";
  /** Number if results found on current search */
  pageResults: Scalars["Int"];
  /** Query string to look for */
  query: Scalars["String"];
  /** Current page index */
  startIndex: Scalars["Int"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> = {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
};

export type SubscriptionResolverObject<TResult, TParent, TContext, TArgs> = {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
};

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GQLResolversTypes = {
  ArticleCard: ResolverTypeWrapper<GQLArticleCard>;
  ArticlesCard: ResolverTypeWrapper<GQLArticlesCard>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Card: GQLResolversTypes["ArticlesCard"] | GQLResolversTypes["HelloCard"];
  HelloCard: ResolverTypeWrapper<GQLHelloCard>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Items: GQLResolversTypes["ArticlesCard"] | GQLResolversTypes["HelloCard"];
  Query: ResolverTypeWrapper<{}>;
  SearchResults: ResolverTypeWrapper<GQLSearchResults>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  URN: ResolverTypeWrapper<Scalars["URN"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GQLResolversParentTypes = {
  ArticleCard: GQLArticleCard;
  ArticlesCard: GQLArticlesCard;
  Boolean: Scalars["Boolean"];
  Card: GQLResolversParentTypes["ArticlesCard"] | GQLResolversParentTypes["HelloCard"];
  HelloCard: GQLHelloCard;
  Int: Scalars["Int"];
  Items: GQLResolversParentTypes["ArticlesCard"] | GQLResolversParentTypes["HelloCard"];
  Query: {};
  SearchResults: GQLSearchResults;
  String: Scalars["String"];
  URN: Scalars["URN"];
};

export type GQLArticleCardResolvers<
  ContextType = GQLContext,
  ParentType extends GQLResolversParentTypes["ArticleCard"] = GQLResolversParentTypes["ArticleCard"]
> = {
  content?: Resolver<Maybe<GQLResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<GQLResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<GQLResolversTypes["String"], ParentType, ContextType>;
  subTitle?: Resolver<GQLResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<GQLResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQLArticlesCardResolvers<
  ContextType = GQLContext,
  ParentType extends GQLResolversParentTypes["ArticlesCard"] = GQLResolversParentTypes["ArticlesCard"]
> = {
  articles?: Resolver<Maybe<Array<Maybe<GQLResolversTypes["ArticleCard"]>>>, ParentType, ContextType>;
  urn?: Resolver<GQLResolversTypes["URN"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQLCardResolvers<
  ContextType = GQLContext,
  ParentType extends GQLResolversParentTypes["Card"] = GQLResolversParentTypes["Card"]
> = {
  __resolveType: TypeResolveFn<"ArticlesCard" | "HelloCard", ParentType, ContextType>;
  urn?: Resolver<GQLResolversTypes["URN"], ParentType, ContextType>;
};

export type GQLHelloCardResolvers<
  ContextType = GQLContext,
  ParentType extends GQLResolversParentTypes["HelloCard"] = GQLResolversParentTypes["HelloCard"]
> = {
  text?: Resolver<Maybe<Array<Maybe<GQLResolversTypes["String"]>>>, ParentType, ContextType>;
  urn?: Resolver<GQLResolversTypes["URN"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQLItemsResolvers<
  ContextType = GQLContext,
  ParentType extends GQLResolversParentTypes["Items"] = GQLResolversParentTypes["Items"]
> = {
  __resolveType: TypeResolveFn<"ArticlesCard" | "HelloCard", ParentType, ContextType>;
};

export type GQLQueryResolvers<
  ContextType = GQLContext,
  ParentType extends GQLResolversParentTypes["Query"] = GQLResolversParentTypes["Query"]
> = {
  Cards?: Resolver<
    Maybe<Array<Maybe<GQLResolversTypes["Items"]>>>,
    ParentType,
    ContextType,
    RequireFields<GQLQueryCardsArgs, "cardsURN">
  >;
  Search?: Resolver<
    GQLResolversTypes["SearchResults"],
    ParentType,
    ContextType,
    RequireFields<GQLQuerySearchArgs, "query">
  >;
};

export type GQLSearchResultsResolvers<
  ContextType = GQLContext,
  ParentType extends GQLResolversParentTypes["SearchResults"] = GQLResolversParentTypes["SearchResults"]
> = {
  pageResults?: Resolver<GQLResolversTypes["Int"], ParentType, ContextType>;
  query?: Resolver<GQLResolversTypes["String"], ParentType, ContextType>;
  startIndex?: Resolver<GQLResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQLUrnScalarConfig = {
  name: "URN";
} & GraphQLScalarTypeConfig<GQLResolversTypes["URN"], any>;

export type GQLResolvers<ContextType = GQLContext> = {
  ArticleCard?: GQLArticleCardResolvers<ContextType>;
  ArticlesCard?: GQLArticlesCardResolvers<ContextType>;
  Card?: GQLCardResolvers<ContextType>;
  HelloCard?: GQLHelloCardResolvers<ContextType>;
  Items?: GQLItemsResolvers<ContextType>;
  Query?: GQLQueryResolvers<ContextType>;
  SearchResults?: GQLSearchResultsResolvers<ContextType>;
  URN?: GraphQLScalarType;
};
