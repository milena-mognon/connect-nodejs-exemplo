import Category from "../infra/typeorm/entities/Category";

export default interface ICategoryRepositoy {
  findAll(): Promise<Category[]>;
  findbyId(id: number): Promise<Category | undefined>;
}
