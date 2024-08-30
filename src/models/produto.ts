import Categoria from "./categoria";

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem_Produto: string;
  categora: Categoria | null;
}
