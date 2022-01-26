import { Request, Response, Router, NextFunction } from "express";
import * as ImageService from "../services/image";

/**
 * Router Definition
 */
export const ImageRouter = Router();

ImageRouter.get("/:image", async (req: Request, res: Response, next: NextFunction) => {
  const image: string = req.params.image;
  const width: any = req.query.width;

  try {
    ImageService.getImage(image, parseInt(width))
      .then((img) => {
        const mime = img.getMIME();
        img.getBufferAsync(mime).then((buffer) => {
          res.set("Cache-Control", "public, max-age=31557600, s-maxage=31557600");
          res.writeHead(200, { "Content-Type": mime });
          res.write(buffer, "binary");
          res.send();
        });
      })
      .catch((e) => {
        next(e);
      });
  } catch (e) {
    next(e);
  }
});
