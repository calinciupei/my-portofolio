import HttpException from "../common/http-exception";
import { Request, Response, NextFunction } from "express";
export declare const ErrorHandler: ({ name, message }: HttpException, request: Request, response: Response, next: NextFunction) => void;
