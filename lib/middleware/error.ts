import HttpException from "../common/http-exception";
import { Request, Response, NextFunction } from "express";

export const ErrorHandler = (
  { name, message }: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const errorMessage = message || "It's not you. It's us. We are having some problems.";
  const statusCode = name === "UnauthorizedError" ? 401 : 500;

  response.status(statusCode).send(errorMessage);
};
