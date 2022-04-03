import { Request, Response } from "express";
import getManifest from "../helpers/manifest";
import template from "../templates/html";

export const NotFoundHandler = (_: Request, response: Response): void => {
  getManifest()
    .then((metadata) => {
      response.status(200).send(template(metadata, `{}`));
    })
    .catch((error) => {
      response.status(200).send(template(error, `{}`));
    });
};
