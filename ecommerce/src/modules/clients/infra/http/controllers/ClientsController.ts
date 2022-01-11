import { Request, Response } from "express";
import CreateClientService from "../../../services/CreateClientService";

/**
 * O controller tem acesso as requisições e é o responsável por enviar uma
 * resposta
 *
 * Por padrão ele deve ter no máximo 5 métodos (index, create, show, update e delete)
 */
class ClientsController {
  async create(request: Request, response: Response) {
    const data = request.body;

    const createClientService = new CreateClientService();

    const client = await createClientService.execute(data);

    return response.json(client);
  }
}

export default new ClientsController();
