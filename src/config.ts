import { load } from "jsr:@std/dotenv";

load({
  envPath: "./d.env",
  export: true,
});

export const devConfig = {
  secretKey: Deno.env.get("SECRET_KEY"),
  port: 3000,
};
