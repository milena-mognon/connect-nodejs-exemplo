import { DeleteResult } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import FindClientByIdService from "./FindClientByIdService";

export default class DeleteClientService {
  public async execute(id: number): Promise<DeleteResult> {
    const clientRepository = new ClientRepository();

    const findClientByIDService = new FindClientByIdService();

    await findClientByIDService.execute(id);

    const result = await clientRepository.delete(id);

    return result;
  }
}
