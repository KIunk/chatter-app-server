//@deno-types="npm:@types/express"

import { NextFunction, Request, Response } from "npm:express";
import { devConfig } from "../../config.ts";

export const log = (req: Request, res: Response, next: NextFunction) => {
  const logger = devConfig.logger;

  logger.info(`[${req.method}] ${req.url} | ${res.statusCode}`);

  next();
};
