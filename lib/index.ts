import { app } from "./controller";

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Liste on port ${PORT}`);
});

// https

//   .createServer(
//     {
//       key: fs.readFileSync("./certificates/server.key"),
//       cert: fs.readFileSync("./certificates/server.cert"),
//     },
//     app,
//   )
//   .listen(PORT, () => {
//     // eslint-disable-next-line no-console
//     console.log(`Liste on port ${PORT}`);
//   });
