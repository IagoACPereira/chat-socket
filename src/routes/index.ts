import express, { Application, Request, Response } from "express";

export function routes(app: Application) {
  app.use(express.static('./src/public'))
  app
    .get('/', (req: Request, res: Response) => {
      res.status(200).sendFile('./src/public/index.html');
    });
}