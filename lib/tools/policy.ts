import { Request, Response, NextFunction } from "express";
import { v4 } from "uuid";

enum DirectivesEnum {
  SELF = `'self'`,
  UNSAFEINLINE = `'unsafe-inline'`
}

type Directives = {
  defaultSrc: DirectivesEnum.SELF;
  self: DirectivesEnum.SELF;
  unsafeInline: DirectivesEnum.UNSAFEINLINE;
  scripts: string[];
  styles: string[];
  fonts: string[];
  frames: string[];
  images: string[];
  connect: string[];
};

function generateNonce(req: Request, { locals }: Response, next: NextFunction): void {
  const rhyphen = /-/g;
  locals.nonce = v4().replace(rhyphen, "");
  next();
}

function getNonce(req: Request, { locals }: Response): string {
  return `'nonce-${locals.nonce}'`;
}

function getDirectives(): Directives {
  const self = DirectivesEnum.SELF;
  const unsafeInline = DirectivesEnum.UNSAFEINLINE;
  const images = [`https:`, `data:`];

  return {
    defaultSrc: self,
    self,
    unsafeInline,
    scripts: [self],
    styles: [self],
    fonts: [self],
    frames: [self],
    images,
    connect: [self]
  };
}

export { generateNonce, getNonce, getDirectives };
