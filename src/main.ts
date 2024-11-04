//@deno-types="npm:@types/express"

import express, { Express } from "npm:express";
import { devConfig } from "./config.ts";

const app: Express = express();
const port: number = devConfig.port;

app.listen(port, () => {
  console.log(
    `App running on port ${port}. App located at http://127.0.0.1:${port}`,
  );
});
