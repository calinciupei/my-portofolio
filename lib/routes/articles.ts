import { Request, Response, Router } from "express";
import * as ArticleService from "../services/articles";

/**
 * Router Definition
 */
export const ArticlesRouter = Router();

/**
 * Controller Definitions
 */

// GET items/
ArticlesRouter.get("/", async (req: Request, res: Response) => {
  const articles = await ArticleService.getAllArticles();

  res.status(200).send(articles);
});

// GET items/:id
// ItemsRouter.get("/:id", async (req: Request, res: Response) => {
//   const id: number = parseInt(req.params.id, 10);

//   try {
//     const item: ItemType = await ItemService.find(id);

//     res.status(200).json(item);
//   } catch (e) {
//     res.status(404).send(e);
//   }
// });

// // POST items/
// ItemsRouter.post("/", async (req: Request, res: Response) => {
//   try {
//     const item: ItemType = req.body.item;

//     await ItemService.create(item);

//     res.status(200).send(item);
//   } catch (e) {
//     res.status(404).send(e.message);
//   }
// });

// // PUT items/
// ItemsRouter.put("/", async (req: Request, res: Response) => {
//   try {
//     const item: ItemType = req.body.item;

//     await ItemService.update(item);

//     res.status(200).send(item);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });

// // DELETE items/:id
// ItemsRouter.delete("/:id", async (req: Request, res: Response) => {
//   try {
//     const id: number = parseInt(req.params.id, 10);
//     await ItemService.remove(id);

//     res.sendStatus(200);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });
