import { URNType } from './context';
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GQLContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  URN: { input: URNType; output: URNType; }
};

/** Represents Card related to a article */
export type GQLArticleCard = {
  __typename?: 'ArticleCard';
  /** Article content */
  content?: Maybe<Scalars['String']['output']>;
  /** Article id */
  id: Scalars['Int']['output'];
  /** Article name */
  name: Scalars['String']['output'];
  /** Article title */
  subTitle: Scalars['String']['output'];
  /** Article title */
  title: Scalars['String']['output'];
};

/** Represents a list of article cards */
export type GQLArticlesCard = GQLCard & {
  __typename?: 'ArticlesCard';
  /** List of articles */
  articles?: Maybe<Array<Maybe<GQLArticleCard>>>;
  /** Articles URN */
  urn: Scalars['URN']['output'];
};

export type GQLCard = {
  urn: Scalars['URN']['output'];
};

export type GQLHelloCard = GQLCard & {
  __typename?: 'HelloCard';
  /** List of texts */
  text?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Hello card URN */
  urn: Scalars['URN']['output'];
};

export type GQLItems = GQLArticlesCard | GQLHelloCard;

export type GQLQuery = {
  __typename?: 'Query';
  Cards?: Maybe<Array<Maybe<GQLItems>>>;
  /** Search through articles */
  Search: GQLSearchResults;
};


export type GQLQueryCardsArgs = {
  cardsURN: Array<Scalars['URN']['input']>;
};


export type GQLQuerySearchArgs = {
  query: Scalars['String']['input'];
};

/** Search results */
export type GQLSearchResults = {
  __typename?: 'SearchResults';
  /** Number if results found on current search */
  pageResults: Scalars['Int']['output'];
  /** Query string to look for */
  query: Scalars['String']['output'];
  /** Current page index */
  startIndex: Scalars['Int']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type GQLResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  Items: ( GQLArticlesCard ) | ( GQLHelloCard );
};

/** Mapping of interface types */
export type GQLResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Card: ( GQLArticlesCard ) | ( GQLHelloCard );
};

/** Mapping between all available schema types and the resolvers types */
export type GQLResolversTypes = {
  ArticleCard: ResolverTypeWrapper<GQLArticleCard>;
  ArticlesCard: ResolverTypeWrapper<GQLArticlesCard>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Card: ResolverTypeWrapper<GQLResolversInterfaceTypes<GQLResolversTypes>['Card']>;
  HelloCard: ResolverTypeWrapper<GQLHelloCard>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Items: ResolverTypeWrapper<GQLResolversUnionTypes<GQLResolversTypes>['Items']>;
  Query: ResolverTypeWrapper<{}>;
  SearchResults: ResolverTypeWrapper<GQLSearchResults>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  URN: ResolverTypeWrapper<Scalars['URN']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GQLResolversParentTypes = {
  ArticleCard: GQLArticleCard;
  ArticlesCard: GQLArticlesCard;
  Boolean: Scalars['Boolean']['output'];
  Card: GQLResolversInterfaceTypes<GQLResolversParentTypes>['Card'];
  HelloCard: GQLHelloCard;
  Int: Scalars['Int']['output'];
  Items: GQLResolversUnionTypes<GQLResolversParentTypes>['Items'];
  Query: {};
  SearchResults: GQLSearchResults;
  String: Scalars['String']['output'];
  URN: Scalars['URN']['output'];
};

export type GQLArticleCardResolvers<ContextType = GQLContext, ParentType extends GQLResolversParentTypes['ArticleCard'] = GQLResolversParentTypes['ArticleCard']> = {
  content?: Resolver<Maybe<GQLResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>;
  subTitle?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQLArticlesCardResolvers<ContextType = GQLContext, ParentType extends GQLResolversParentTypes['ArticlesCard'] = GQLResolversParentTypes['ArticlesCard']> = {
  articles?: Resolver<Maybe<Array<Maybe<GQLResolversTypes['ArticleCard']>>>, ParentType, ContextType>;
  urn?: Resolver<GQLResolversTypes['URN'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQLCardResolvers<ContextType = GQLContext, ParentType extends GQLResolversParentTypes['Card'] = GQLResolversParentTypes['Card']> = {
  __resolveType: TypeResolveFn<'ArticlesCard' | 'HelloCard', ParentType, ContextType>;
  urn?: Resolver<GQLResolversTypes['URN'], ParentType, ContextType>;
};

export type GQLHelloCardResolvers<ContextType = GQLContext, ParentType extends GQLResolversParentTypes['HelloCard'] = GQLResolversParentTypes['HelloCard']> = {
  text?: Resolver<Maybe<Array<Maybe<GQLResolversTypes['String']>>>, ParentType, ContextType>;
  urn?: Resolver<GQLResolversTypes['URN'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQLItemsResolvers<ContextType = GQLContext, ParentType extends GQLResolversParentTypes['Items'] = GQLResolversParentTypes['Items']> = {
  __resolveType: TypeResolveFn<'ArticlesCard' | 'HelloCard', ParentType, ContextType>;
};

export type GQLQueryResolvers<ContextType = GQLContext, ParentType extends GQLResolversParentTypes['Query'] = GQLResolversParentTypes['Query']> = {
  Cards?: Resolver<Maybe<Array<Maybe<GQLResolversTypes['Items']>>>, ParentType, ContextType, RequireFields<GQLQueryCardsArgs, 'cardsURN'>>;
  Search?: Resolver<GQLResolversTypes['SearchResults'], ParentType, ContextType, RequireFields<GQLQuerySearchArgs, 'query'>>;
};

export type GQLSearchResultsResolvers<ContextType = GQLContext, ParentType extends GQLResolversParentTypes['SearchResults'] = GQLResolversParentTypes['SearchResults']> = {
  pageResults?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>;
  query?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>;
  startIndex?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GQLUrnScalarConfig extends GraphQLScalarTypeConfig<GQLResolversTypes['URN'], any> {
  name: 'URN';
}

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

