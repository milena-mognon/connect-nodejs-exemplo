import IContactDTO from "./IContactDTO";
import IUserDTO from "./IUserDTO";

export default class User {
  constructor({ nome, idade, email, contatos }: IUserDTO) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.contatos = contatos;
  }
  nome: string;
  idade: number;
  email?: string | undefined;
  contatos: IContactDTO[];
}
