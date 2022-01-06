import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users") // Diz que essa entidade represetnta a tabela users no banco
export default class User {
  @PrimaryGeneratedColumn("increment") // id é gerado pelo banco de forma incremental
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
