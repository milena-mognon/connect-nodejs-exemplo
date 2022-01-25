import IProductDTO from "../../../dtos/IProductDTO";
import IProductRepository from "../../../repositories/IProductRepository";
import { getRepository, Repository } from "typeorm";
import Product from "../entities/Product";

export default class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  async findById(id: number): Promise<Product | undefined> {
    return this.ormRepository.findOne(id, {
      relations: ["categoria"],
    });

    // return this.ormRepository.findOne(id);

    // return this.ormRepository
    //   .createQueryBuilder("prod")
    //   .leftJoinAndSelect("prod.categoria", "cat")
    //   .where("prod.id = :id", { id })
    //   .getOne();
  }

  async create(data: IProductDTO): Promise<Product> {
    const product = this.ormRepository.create(data);

    return this.ormRepository.save(product);
  }
}
