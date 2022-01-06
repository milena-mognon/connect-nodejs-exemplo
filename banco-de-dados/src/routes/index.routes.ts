import User from "../entities/User";
import { Request, Response, Router } from "express";
import { getRepository, Repository } from "typeorm";

const routes = Router();

/**
 * Rota de cadastro de Usuário
 */
routes.post("/users", async (request: Request, response: Response) => {
  const data = request.body;

  let ormRepository: Repository<User>; // váriavel do tipo repositório de User

  ormRepository = getRepository(User); // conecta com a tabela users do bando de dados

  const user = ormRepository.create(data); // Cria uma instancia de User

  await ormRepository.save(user); // Salva o novo user no banco de dados

  return response.json(user); // retorna o usuário cadastrado
});

/**
 * Rota de listagem de Usuários
 */
routes.get("/users", async (request: Request, response: Response) => {
  let ormRepository: Repository<User>; // váriavel do tipo repositório de User

  ormRepository = getRepository(User); // conecta com a tabela users do bando de dados

  const users = await ormRepository.find(); // busca todos os usuários

  return response.json(users); // retorna os usuário no formato JSON
});

export default routes;
