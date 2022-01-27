import Product from "../../../../products/infra/typeorm/entities/Product";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("categorias")
export default class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  descricao: string;

  /**
   * Uma categoria pode ter muitos produtos
   */
  @OneToMany(() => Product, (product) => product.categoria)
  produtos: Product[]; // produtos não é uma coluna do banco de dados
  // representa o relacionamento

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
