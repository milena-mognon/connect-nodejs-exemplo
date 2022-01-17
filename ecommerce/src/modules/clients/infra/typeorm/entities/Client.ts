import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("clientes")
export default class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @Column()
  data_nascimento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
