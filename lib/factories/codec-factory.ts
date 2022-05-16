import { URNType } from "./../context";

const COLON = ":";

type HelloCodecFactory = {
  isValid(urn: URNType): boolean;
};

type ArticleQComponent = { ids?: string; tags?: string; categories: string };

type ArticleCodecFactory = {
  isValid(urn: URNType): boolean;
  getQComponent(urn: URNType): { ids?: string; tags?: string; categories: string };
};

type CodecFactory = {
  isValid(urn: URNType): boolean;
};

type CodecService = {
  card: {
    helloCard: HelloCodecFactory;
    articlesCard: ArticleCodecFactory;
  };
};

function codecArticlesFactory(): ArticleCodecFactory {
  function isValid(urn: URNType): boolean {
    // urn:card:articles:ids:6|2|1
    const urnRegExp = new RegExp(URNType.ArticlesCard, "g");
    const matches = urnRegExp.exec(urn) || "";

    return matches[0] === URNType.ArticlesCard;
  }

  /**
   *
   * @param urn urn:card:articles:ids:3|4|1:tags:javascript|css|algorithm:categories:css|js|html
   * @returns object {ids: '3|4|1', tags: 'javascript|css|algorithm', categories: 'css|js|html'}}
   */
  function getQComponent(urn: URNType): ArticleQComponent {
    const urnRegExp = new RegExp(URNType.ArticlesCard, "g");
    const matches = urnRegExp.exec(urn) || "";
    const qComponent = urn.split(matches[0])[1].substring(1).split(COLON);
    const params = qComponent.reduce(
      (prev, curr, index) => {
        if (Object.values(prev).includes(curr)) {
          return prev;
        }

        return {
          ...prev,
          [`${curr}`]: qComponent[index + 1]
        };
      },
      {
        ids: "",
        tags: "",
        categories: ""
      }
    );

    return params;
  }

  return {
    isValid,
    getQComponent
  };
}

function codecFactory(type: URNType): CodecFactory {
  return {
    isValid: (urn) => {
      return urn === type;
    }
  };
}

const codecService: CodecService = {
  card: {
    helloCard: codecFactory(URNType.HelloCard),
    articlesCard: codecArticlesFactory()
  }
};

export default codecService;
