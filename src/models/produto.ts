import Categoria from "./categoria";
import Usuario from "./usuario";

export default interface Produto {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  imagem_produto: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
