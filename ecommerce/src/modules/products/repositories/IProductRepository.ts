import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";

export default interface IProductRepository {
  create(data: IProductDTO): Promise<Product>;
  findById(id: number): Promise<Product | undefined>;
}
