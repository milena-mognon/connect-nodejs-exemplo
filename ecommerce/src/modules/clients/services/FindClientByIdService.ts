import AppError from "../../../shared/errors/AppErrors";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class FindClientByIdService {
  public async execute(id: number): Promise<Client> {
    const clientRepository = new ClientRepository();

    const client = await clientRepository.findById(id);

    if (!client) {
      throw new AppError("Cliente não Existe");
    }

    return client;
  }
}
