import { Request, Response } from "express";
import FindAllClientsService from "../../../services/FindAllClientsService";
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

  async list(request: Request, response: Response) {
    const listAllClientsService = new FindAllClientsService();

    const clients = await listAllClientsService.execute();

    return response.json(clients);
  }
}

export default new ClientsController();
