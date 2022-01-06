import { MigrationInterface, QueryRunner, Table } from "typeorm";
/**
 * A migration é utilizada para criar as tabelas do banco de dados, criar ou atualizar
 * colunas, etc. Elas são geradas com um timestamp que deixa os arquivos sempre
 * na ordem correta para serem executados.
 *
 * Quando o sistema está em ambiente de produção as alterações que
 * forem necessárias no bando deve ser feitas através de novas migrations.
 */
export default class CreateUser1641426623700 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "idade",
            type: "tinyint",
            isNullable: false,
          },
          {
            name: "cpf",
            type: "varchar",
            length: "20",
            isNullable: false,
          },
          {
            name: "telefone",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
