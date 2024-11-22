import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

export const app: Express = express();

app.use(express.json());

app.post("/sum", (req: Request, res: Response) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = a + b;

  res.json({
    answer,
  });
});
