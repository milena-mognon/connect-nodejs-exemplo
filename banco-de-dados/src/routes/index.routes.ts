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

  ormRepository = getRepository(User); // conecta com a tabela users do banco de dados

  const user = ormRepository.create(data); // Cria uma instancia de User

  await ormRepository.save(user); // Salva o novo user no banco de dados

  return response.json(user); // retorna o usuário cadastrado
});

/**
 * Rota de listagem de Usuários
 */
routes.get("/users", async (request: Request, response: Response) => {
  let ormRepository: Repository<User>; // váriavel do tipo repositório de User

  ormRepository = getRepository(User); // conecta com a tabela users do banco de dados

  const users = await ormRepository.find(); // busca todos os usuários

  return response.json(users); // retorna os usuário no formato JSON
});

/**
 * Atualiza um usuário
 */
routes.put("/users/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const data = request.body;

  let ormRepository: Repository<User>; // váriavel do tipo repositório de User

  ormRepository = getRepository(User); // conecta com a tabela users do banco de dados

  const dataToUpdate = {
    id: Number(id), // precisa converter para Number
    ...data,
  };

  const user = await ormRepository.save(dataToUpdate); // atualiza o usuário

  return response.json(user); // retorna os usuário no formato JSON
});

/**
 * Busca um Usuário
 */
routes.get("/users/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  let ormRepository: Repository<User>; // váriavel do tipo repositório de User

  ormRepository = getRepository(User); // conecta com a tabela users do banco de dados

  // Primira opção para buscar um usuário
  const user = await ormRepository.findOne(id); // busca um usuário

  // Segunda opção para buscar um usuário
  // const user = await ormRepository.findOne({ where: { id } }); // busca um usuário

  // Terceira opção para buscar um usuário
  // const user = await ormRepository
  //   .createQueryBuilder("users")
  //   .where("users.id = :id", { id })
  //   .getOne(); // busca um usuário

  return response.json(user); // retorna os usuário no formato JSON
});

/**
 * Busca um Usuário
 */
routes.delete("/users/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  let ormRepository: Repository<User>; // váriavel do tipo repositório de User

  ormRepository = getRepository(User); // conecta com a tabela users do banco de dados

  const user = await ormRepository.delete(id); // deleta um usuário

  return response.json(user); // retorna os usuário no formato JSON
});

export default routes;
