/**
 * Mesmo exemplo do index.js, porém usando a sintaxe mais nova do javascript
 * Não funciona por padrão, se tentar rodar pode dar esse erro:
 * import express from "express"; // importa o express nesse arquivo
   ^^^^^^
   SyntaxError: Cannot use import statement outside a module

   Para funcionar é preciso adicionar a informação "type": "module", no package.json
   OBS: Se mudar para "type": "module" o arquivo index.js irá parar de funcionar

   Se fosse em typescript funcionaria por padrão
 */
import express from "express"; // importa o express nesse arquivo

const app = express(); // inicia o express

app.use(express.json()); // configura para aceitar requisições em json

/**
 * Primeira rota criada.
 * Rota GET que irá responder com um json
 * Pode ser testada pelo insomnia
 * GET http://localhost:3333/
 */
app.get("/", (request, response) => {
  return response.json({
    tecnologia: "node",
    linguagem: "javascript",
  });
});

// retorna um servidor node rodando na porta 3333
app.listen(3333, () => {
  console.log("Servidor rodando");
});
