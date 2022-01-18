import IClientDTO from "modules/clients/dtos/IClientDTO";
import IClientRepository from "modules/clients/repositories/IClientRepository";
import { DeleteResult, getManager, getRepository, Repository } from "typeorm";
import Client from "../entities/Client";

/**
 * É nesse arquivo que serão feitas todas as conexões com o banco de dados
 * Ele implementa a Interface de IClientRepository portanto, sempre
 * que precisar de um novo método ele deve ser criado na interface também
 */
export default class ClientRepository implements IClientRepository {
  private entityManager;

  constructor() {
    entityManager = getManager();
  }

  async findByCode(Entity, code: number): Promise<DeleteResult> {
    return entityManager.delete(Entity, code);
  }
}
