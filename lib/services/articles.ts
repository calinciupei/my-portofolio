import { FireStore } from "../firebase/init";

export const getAllArticles = async (): Promise<any[]> => {
  const articles = await FireStore.collection("articles").get();
  const results: any[] = [];

  await articles.forEach((article) => {
    const { title } = article.data();

    results.push({ title });
  });

  return results;
};

export const getAllArticle = async (slug?: string): Promise<any> => {
  const article: any = {
    date: "",
    content: "",
    img: "",
    language: "",
    isEnabled: false,
    subtitle: "",
    slug: "",
    title: ""
  };

  return article;
};
