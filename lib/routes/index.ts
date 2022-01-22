import { Request, Response, Router } from "express";
import { ROUTES } from "../config/routes";
import * as ArticleService from "../services/articles";
import * as MetadataService from "../helpers/metadata";
import template from "../templates/html";
import getManifest from "../helpers/manifest";

export const IndexRouter = Router();

IndexRouter.get(
  [ROUTES.HOME, ROUTES.ABOUT_US, ROUTES.CONTACT, ROUTES.NEWS, ROUTES.SERVICES],
  async (req: Request, res: Response) => {
    const articles = await ArticleService.getAllArticles();
    const slug = req.params?.slug ? req.params.slug : "";
    const url = req.path;
    const articleSelected = await ArticleService.getAllArticle(slug);

    const pageMetadata: any = MetadataService.getMetadata(req.path, articleSelected.title);

    const initialState: any = {
      router: {
        currentRoute: url
      },
      articles,
      page: pageMetadata,
      layout: { modal: { isOpen: false, title: pageMetadata.title } }
    };

    getManifest()
      .then((manifest) => {
        res.status(200).send(template(manifest, initialState));
      })
      .catch((e) => {
        res.status(500).send(e.message);
      });
  }
);
