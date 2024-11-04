//@deno-types="npm:@types/express"

import express from "npm:express";

import { load } from "jsr:@std/dotenv";
import * as log from "jsr:@std/log";

load({
  envPath: "./d.env",
  export: true,
});

export const devConfig = {
  app: express(),
  secretKey: Deno.env.get("SECRET_KEY"),
  port: 3000,

  logger: log.getLogger(),
};

log.setup({
  handlers: {
    console: new log.ConsoleHandler("DEBUG"),
    default: new log.ConsoleHandler("DEBUG", {
      formatter: log.formatters.jsonFormatter,
      useColors: true,
    }),

    file: new log.FileHandler("WARN", {
      filename: "./",
      formatter: (record) => `${record.levelName} ${record.msg}`,
    }),
  },

  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["file", "console"],
    },
  },
});
