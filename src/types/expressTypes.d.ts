import "npm:@types/express";

declare module "npm:@types/express" {
  interface Express {
    _router: {
      stack: Array<{ route?: { path: string } }>;
    };
  }
}
