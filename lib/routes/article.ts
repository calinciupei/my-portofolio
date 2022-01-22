import { Request, Response, Router } from "express";

/**
 * Router Definition
 */
export const ArticleRouter = Router();

/**
 * Controller Definitions
 */

// GET items/
ArticleRouter.get("/:slug", async (req: Request, res: Response) => {
  const slug = req.params.slug;

  res.status(200).send(slug);
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
