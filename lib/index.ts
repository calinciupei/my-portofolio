import { app } from "./controller";
import https from "https";
import { readFileSync } from "fs";

const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(`Liste on port ${PORT}`);
// });

https
  .createServer(
    {
      key: readFileSync("./../lib/certs/key.pem"),
      cert: readFileSync("./../lib/certs/cert.pem")
    },
    app
  )
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Liste on port ${PORT}`);
  });
