import ICategoryRepositoy from "modules/categories/repositories/ICategoryRepository";
import { getRepository, Repository } from "typeorm";
import Category from "../entities/Category";

export default class CategoryRepository implements ICategoryRepositoy {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  async findAll(): Promise<Category[]> {
    return this.ormRepository.find();
  }

  async findbyId(id: number): Promise<Category | undefined> {
    // Primeira forma - traz todos os produtos de uma categoria
    // return this.ormRepository.findOne(id, {
    //   relations: ["produtos"],
    // });

    // Segunda Forma - Traz apenas os dados da categoria
    return this.ormRepository.findOne(id);

    // Terceira Forma - Traz todos os produtos de uma categoria
    // return (
    //   this.ormRepository
    //     .createQueryBuilder("c")
    //     // .select(["c.id", "c.descricao", "prod.nome"])
    //     .leftJoinAndSelect("c.produtos", "prod")
    //     .where("c.id = :id", { id })
    //     .getOne()
    // );
  }
}
