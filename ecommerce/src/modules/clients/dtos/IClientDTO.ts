/**
 * Interface que define a tipagem de um cliente
 */
export default interface IClientDTO {
  id?: number; // id é opcional (no cadastro não precisa, mas na ediçao sim)
  nome: string;
  email?: string;
  telefone: string;
  data_nascimento: string;
}
