const express = require("express"); // importa o express nesse arquivo

const app = express(); // inicia o express

app.use(express.json()); // configura para aceitar requisições em json

/**
 * Primeira rota criada.
 * Rota GET que irá responder com um json
 * Pode ser testada pelo insomnia
 * GET http://localhost:3333/
 */
app.get("/", function (request, response) {
  return response.json({
    tecnologia: "node",
    linguagem: "javascript",
  });
});

// retorna um servidor node rodando na porta 3333
app.listen(3333, function () {
  console.log("Servidor rodando");
});
