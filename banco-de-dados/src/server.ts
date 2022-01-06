import "reflect-metadata"; // deve ser a primeira importação. Necessário para utilizar decorators
import express from "express";
import { createConnection } from "typeorm"; // importa a função que irá criar a conexão com o banco
import routes from "./routes/index.routes";

/**
 * Função do typeorm que cria a conexão com o banco de dados
 * Essa função busca as credenciais e informações do banco
 * no arquivo ormconfig.json
 */
createConnection();

const app = express();

app.use(express.json());

app.use(routes); // importa as rotas da aplicação

app.listen(3333, () => {
  console.log("🚀 Servidor Iniciado");
});
