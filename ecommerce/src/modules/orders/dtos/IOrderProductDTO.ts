export default interface IOrderProductDTO {
  pedido_id?: number; // no cadastro o pedido ainda não tem id, o Typeorm sabe colocar
  produto_id: number;
  quantidade: number;
}
