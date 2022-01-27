import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../infra/typeorm/entities/Order";

export default interface IOrderRepository {
  create(data: IOrderDTO): Promise<Order>;
  findById(id: number): Promise<Order | undefined>;
}
