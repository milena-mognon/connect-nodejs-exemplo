import "reflect-metadata";
import express from "express";
import "express-async-errors"; // importe a biblioteca
import "../typeorm";
import routes from "./routes/index.routes";
import ErrorHandler from "./middlewares/ErrorHandler";
import CelebrateErrorHandler from "./middlewares/CelebrateErrorHandler";

const app = express();

app.use(express.json()); // necessário para que o servidor entenda JSON

app.use(routes); // rotas da aplicação

app.use(CelebrateErrorHandler);

/* Se um erro é disparado na aplicação ele será tratado pelo ErrorHandler
 * Se não for tratado a requisição fica carregando e não finaliza.
 */
app.use(ErrorHandler);

app.listen(3333, () => {
  console.log("🚀 Servidor Iniciado");
});
