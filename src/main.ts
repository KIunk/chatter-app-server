//@deno-types="npm:@types/express"

import { Express } from "npm:express";

import { routeValidator } from "./middleware/misc/routeValidator.ts";
import { log } from "./middleware/misc/logger.ts";
import { devConfig } from "./config.ts";

const app: Express = devConfig.app;
const port: number = devConfig.port;

app.use(routeValidator);
app.use(log);

app.get("/auth", (_req, res) => {
  res.send("hello").status(200);
});

app.listen(port, () => {
  console.log(
    `App running on port ${port}. App located at http://127.0.0.1:${port}`,
  );
});
