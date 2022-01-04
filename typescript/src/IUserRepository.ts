import IUserDTO from "./IUserDTO";
import User from "./User";

export default interface IUserRepository {
  create(data: IUserDTO): Promise<void>;
  findById(id: string): Promise<User | undefined>;
}
