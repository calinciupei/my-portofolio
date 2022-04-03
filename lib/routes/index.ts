import { Request, Response, Router } from "express";
import { ROUTES } from "../config/routes";
import template from "../templates/html";
import getManifest from "../helpers/manifest";

export const IndexRouter = Router();

IndexRouter.get(ROUTES.HOME, async (req: Request, res: Response) => {
  try {
    const metadata = await getManifest();

    res.status(200).send(template(metadata, {}));
  } catch (e) {
    res.status(500).send("Error");
  }
});
