/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";

export const NotFoundHandler = (request: Request, response: Response, next: NextFunction): void => {
  const message = "Resource not found";

  response.status(404).send(message);
};
