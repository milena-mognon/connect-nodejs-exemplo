import IClientDTO from "modules/clients/dtos/IClientDTO";
import IClientRepository from "modules/clients/repositories/IClientRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Client from "../entities/Client";

/**
 * É nesse arquivo que serão feitas todas as conexões com o banco de dados
 * Ele implementa a Interface de IClientRepository portanto, sempre
 * que precisar de um novo método ele deve ser criado na interface também
 */
export default class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.ormRepository.delete(id);
  }

  async update(data: IClientDTO): Promise<Client> {
    const client = await this.ormRepository.save(data);
    return client;
  }

  async findById(id: number): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne(id);

    return client;
  }

  async list(): Promise<Client[]> {
    const clients = await this.ormRepository.find();

    return clients;
  }

  async create(data: IClientDTO): Promise<Client> {
    const client = this.ormRepository.create(data);
    return this.ormRepository.save(client);
  }
}
