import Category from "../../../../categories/infra/typeorm/entities/Category";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import OrderProduct from "../../../../../modules/orders/infra/typeorm/entities/OrderProduct";

@Entity("produtos")
export default class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column("float", { scale: 10, precision: 2 })
  preco: number;

  @Column()
  quantidade: number;

  @Column()
  categoria_id: number; // essa é a coluna no banco que quarda o id de categoria

  /**
   * Muitos produtos podem ter a mesma categoria
   */
  @ManyToOne(() => Category, (category) => category.produtos)
  @JoinColumn({ name: "categoria_id" })
  categoria: Category; // categoria não é um produto no banco de dados
  // representa o relacionamento

  @OneToMany(() => OrderProduct, (order_product) => order_product.produto)
  pedido_produtos: OrderProduct[];

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
}
