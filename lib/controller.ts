import { join } from "path";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { IndexRouter, ArticlesRouter, ImageRouter } from "./routes/routes";
import { ErrorHandler, NotFoundHandler } from "./middleware";

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false
  })
);

app.use(cors());
app.use(express.json());

app.use("/", IndexRouter);

app.use(express.static(join(__dirname, "../dist")));
app.use("/articles", ArticlesRouter);
app.use("/image", ImageRouter);

app.use(ErrorHandler);
app.use(NotFoundHandler);

export { app };