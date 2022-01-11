import "reflect-metadata";
import express from "express";
import "../typeorm";
import routes from "./routes/index.routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("🚀 Servidor Iniciado");
});
