import express, { Request, Response } from "express";
// importa o express e as tipagens de Request e Response nesse arquivo

const app = express(); // inicia o express

app.use(express.json()); // configura para aceitar requisições em json

/**
 * Primeira rota criada.
 * Rota GET que irá responder com um json
 * Pode ser testada pelo insomnia
 * GET http://localhost:3333/
 */
app.get("/", (request: Request, response: Response) => {
  return response.json({
    tecnologia: "node",
    linguagem: "javascript",
  });
});

// retorna um servidor node rodando na porta 3333
app.listen(3333, () => {
  console.log("Servidor rodando");
});
