/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { FireStore } from "../firebase/init";
import { Article } from "./../types/article";

export const getAllArticles = async (): Promise<any[]> => {
  const articles = await FireStore.collection("articles").get();
  const results: any[] = [];

  await articles.forEach((article) => {
    const { title } = article.data();

    results.push({ title });
  });

  return results;
};

export const getAllArticle = (): Promise<any> => {
  const article: any = {};

  return article;
};

export type ArticlesService = {
  getArticles(): Article[];
  getArticlesById(id: number[] | undefined): Article[];
};

export default function getArticlesService(): ArticlesService {
  const articles = [
    { content: "content 1", id: 1, name: "name 1", title: "title 1", subTitle: "subTitle 1" },
    { content: "content 2", id: 2, name: "name 2", title: "title 2", subTitle: "subTitle 2" },
    { content: "content 3", id: 3, name: "name 3", title: "title 3", subTitle: "subTitle 3" },
    { content: "content 4", id: 4, name: "name 4", title: "title 4", subTitle: "subTitle 4" },
    { content: "content 5", id: 5, name: "name 5", title: "title 5", subTitle: "subTitle 5" },
    { content: "content 6", id: 6, name: "name 6", title: "title 6", subTitle: "subTitle 6" }
  ];

  function getArticles(): Article[] {
    return articles;
  }

  function getArticlesById(articleIds: number[]): Article[] {
    const results: Article[] = [];

    if (articleIds.length) {
      articleIds.forEach((articleId) => {
        results.push(...articles.filter(({ id }) => id === articleId));
      });
    }

    return results;
  }

  return {
    getArticles,
    getArticlesById
  };
}
