import IUserDTO from "./IUserDTO";
import IUserRepository from "./IUserRepository";
import User from "./User";

export default class UserRepository implements IUserRepository {
  async create(data: IUserDTO): Promise<void> {
    console.log("usuário criado");
    // código deve retornar um User
  }
  async findById(id: string): Promise<User | undefined> {
    // Código deve retornar um User ou undefined
    return new User({
      nome: "MILENA",
      idade: 23,
      contatos: [{ type: "WHATSAPP", description: "999999999" }],
    });
  }
}
