import { Request, Response } from "express";
import FindAllClientsService from "../../../services/FindAllClientsService";
import CreateClientService from "../../../services/CreateClientService";
import FindClientByIdService from "../../../services/FindClientByIdService";
import UpdateClientService from "../../../services/UpdateClientService";
import DeleteClientService from "../../../services/DeleteClientService";

/**
 * O controller tem acesso as requisições e é o responsável por enviar uma
 * resposta
 *
 * Por padrão ele deve ter no máximo 5 métodos (index, create, show, update e delete)
 */
class ClientsController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createClientService = new CreateClientService();

    const client = await createClientService.execute(data);

    return response.json(client);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const listAllClientsService = new FindAllClientsService();

    const clients = await listAllClientsService.execute();

    return response.json(clients);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findClientById = new FindClientByIdService();

    const client = await findClientById.execute(Number(id));

    return response.json(client);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const { id } = request.params; // desestruturação

    const updateClientService = new UpdateClientService();

    const data_to_update = {
      ...data, // rest / spread operator
      id: Number(id),
    };

    const client = await updateClientService.execute(data_to_update);

    return response.json(client);
  }
  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteClientService = new DeleteClientService();

    const result = await deleteClientService.execute(Number(id));

    return response.json(result);
  }
}

export default new ClientsController();
