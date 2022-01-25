import AppError from "../../../shared/errors/AppErrors";
import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class FindProductByIdService {
  public async execute(id: number): Promise<Product> {
    const productRepository = new ProductRepository();

    const product = await productRepository.findById(id);

    if (!product) {
      throw new AppError("produto não encontrado");
    }

    return product;
  }
}
