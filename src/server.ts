import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import { router } from "./routes/index";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((error: Error, _: Request, res: Response) => {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message,
    });
  }

  return res.status(500).json({
    error: "Internal server error!",
  });
});

const PORT = Number(process.env.PORT!) || 3333;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log("Servidor rodando na porta " + PORT);
});
