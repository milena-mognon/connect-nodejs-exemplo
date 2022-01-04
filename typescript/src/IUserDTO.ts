import IContactDTO from "./IContactDTO";

export default interface IUserDTO {
  nome: string;
  idade: number;
  email?: string;
  contatos: IContactDTO[];
}
