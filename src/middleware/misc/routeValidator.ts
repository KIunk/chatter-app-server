import "../../types/expressTypes.d.ts";

//@deno-types="npm:@types/express"
import { Express, NextFunction, Request, Response } from "npm:express";

import { devConfig } from "../../config.ts";

const app: Express = devConfig.app;
const logger = devConfig.logger;

export const routeValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const routes: string[] = [];
  app._router.stack.forEach((middleware) => {
    if (middleware.route) { // Check if this layer has a route
      routes.push(middleware.route.path);
    }
  });

  if (!routes.includes(req.url)) {
    console.log(routes, req.url);
    res.sendStatus(404);
    logger.info(`[${req.method}] ${req.url} | ${res.statusCode}`);
    return;
  }
  return next();
};
